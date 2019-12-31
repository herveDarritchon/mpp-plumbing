package fr.hervedarritchon.products.kaharactr

import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * Created by Hervé Darritchon on 18/12/2019.
 *
 */
class SayHelloKotlinConfJsTest {
    @Test
    fun testSayHelloJs() {
        assertEquals(
            "We are running on JavaScript",
            sayHelloKotlinConf().lines().last()
        )
    }
}