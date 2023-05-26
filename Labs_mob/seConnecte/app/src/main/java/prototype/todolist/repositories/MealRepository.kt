package prototype.todolist.repositories

import prototype.todolist.dao.MealDao

class MealRepository () {

    private val mealDao = MealDao()

    suspend fun getMeals() = mealDao.getMeals()
}