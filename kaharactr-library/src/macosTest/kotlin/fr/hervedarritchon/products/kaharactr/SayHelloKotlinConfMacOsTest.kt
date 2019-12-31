package fr.hervedarritchon.products.kaharactr

import kotlin.test.Test
import kotlin.test.assertEquals

class SayHelloKotlinConfMacOsTest {
    @Test
    fun testSayHelloLinux() {
        assertEquals(
            "We are running on macOs",
            sayHelloKotlinConf().lines().last()
        )
    }
}