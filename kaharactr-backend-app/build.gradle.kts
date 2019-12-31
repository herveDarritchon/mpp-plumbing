import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.3.61"
    application
}

group = "fr.hervedarritchon.products.kaharactr.backend"
version = "1.0"

application.mainClassName = "fr.hervedarritchon.products.kaharactr.backend.MainKt"

repositories {
    jcenter()
}

dependencies {
    implementation(kotlin("stdlib-jdk8"))

    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.9.5")
    implementation("com.fasterxml.jackson.core:jackson-core:2.9.5")

    val ktorVer = "1.2.6"
    implementation("io.ktor:ktor-server-netty:$ktorVer")
    implementation("io.ktor:ktor-jackson:$ktorVer") {
        exclude("com.fasterxml.jackson.module")
        exclude("com.fasterxml.jackson.core")
    }

    implementation("ch.qos.logback:logback-classic:1.2.3")
    implementation("org.dizitart:potassium-nitrite:3.3.0")

    val kodeinVer = "6.5.1"
    implementation("org.kodein.di:kodein-di-generic-jvm:$kodeinVer")
    implementation("org.kodein.di:kodein-di-framework-ktor-server-jvm:$kodeinVer")
    implementation("org.kodein.di:kodein-di-framework-ktor-server-controller-jvm:$kodeinVer")

}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
}