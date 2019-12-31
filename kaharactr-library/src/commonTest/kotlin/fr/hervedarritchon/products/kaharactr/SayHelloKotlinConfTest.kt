package fr.hervedarritchon.products.kaharactr

import kotlin.test.Test
import kotlin.test.assertEquals

class SayHelloKotlinConfTest {
    @Test
    fun should_say_hello_to_kotlin_conf() {
        assertEquals(
            "Hello KotlinConf, Kotlin/Multiplatform is awesome!",
            sayHelloKotlinConf().lines().first()
        )
    }
}