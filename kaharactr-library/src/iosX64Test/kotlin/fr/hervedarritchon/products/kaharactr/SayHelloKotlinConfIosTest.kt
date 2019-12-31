package fr.hervedarritchon.products.kaharactr

import kotlin.test.Test
import kotlin.test.assertEquals

class SayHelloKotlinConfIosTest {
    @Test
    fun testSayHelloIos() {
        assertEquals(
            "We are running on iOS",
            sayHelloKotlinConf().lines().last()
        )
    }

}
