package fr.hervedarritchon.products.kaharactr

import org.junit.Test
import kotlin.test.assertEquals

class SayHelloKotlinConfJvmTest {
    @Test
    fun testSayHelloJvm() {
        assertEquals(
            "We are running on JVM",
            sayHelloKotlinConf().lines().last()
        )
    }
}