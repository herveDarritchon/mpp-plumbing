plugins {
    java
    kotlin("multiplatform") version "1.3.61"
    `maven-publish`
}

group = "fr.hervedarritchon.products"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testCompile("junit", "junit", "4.12")
}

configure<JavaPluginConvention> {
    sourceCompatibility = JavaVersion.VERSION_1_8
}

kotlin {
    /* Targets configuration.
    *  To find out how to configure the targets, please follow the link:
    *  https://kotlinlang.org/docs/reference/building-mpp-with-gradle.html#setting-up-targets
    * */

    jvm()             // JVM & Android

    js { browser() }  // Browser JS

    // iOS special case for building
    iosX64() {
        binaries {
            framework {
                baseName = "kaharactrLibrary"
            }
        }
    }         // iOS simulator

    val os = org.gradle.internal.os.OperatingSystem.current()
    val hostTarget = when {
        os.isLinux -> linuxX64("linux")
        os.isMacOsX -> macosX64("macos")
        os.isWindows -> mingwX64("mingw")
        else -> throw IllegalStateException("Your OS [$os] is not supported!")
    }       // MacOsX (because I have a Mac)

    sourceSets {

        // Common
        val commonMain by getting {
            dependencies {
                implementation(kotlin("stdlib-common"))
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }

        // JVM
        val jvmMain by getting {
            dependencies {
                implementation(kotlin("stdlib"))
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test"))
                implementation(kotlin("test-junit"))
            }
        }

        // JS
        val jsMain by getting {
            dependencies {
                implementation(kotlin("stdlib-js"))
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}

//  iOS special case for Tests
val iosTest: Task by tasks.creating {
    val testExecutable = kotlin.targets
        .getByName<org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget>("iosX64").binaries.getTest("DEBUG")

    dependsOn(testExecutable.linkTaskName)
    group = JavaBasePlugin.VERIFICATION_GROUP
    description = "Runs tests for target 'ios' on an iOS simulator"

    doLast {
        exec {
            val device = project.findProperty("iosDevice")?.toString() ?: "iPhone 8"
            commandLine( "xcrun", "simctl", "spawn",
                "--standalone", device, testExecutable.outputFile.absolutePath)
        }
    }
}

tasks.getByName("allTests").dependsOn(iosTest)

// iOS special case publishing : copy it into a shared place for xCode
val packForXcode by tasks.creating(Sync::class) {
    val mode = System.getenv("CONFIGURATION") ?: "DEBUG"
    val framework = kotlin.targets
        .getByName<org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget>("iosX64")
        .binaries.getFramework(mode)
    inputs.property("mode", mode)

    dependsOn(framework.linkTask)

    val targetDir = File(buildDir, "xcode-frameworks")
    from({ framework.outputDirectory })
    into(targetDir)
}

tasks.getByName("assemble").dependsOn(packForXcode)