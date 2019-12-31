package fr.hervedarritchon.products.kaharactr

import kotlin.test.*

class FunctionsTest {
    @Test
    fun should_add_2_positive_Int_together() {
        assertEquals(5,addition(2,3))
    }

    @Test
    fun should_add_a_positive_and_a_negative_Int_together() {
        assertEquals(-1,addition(2,-3))
    }
}