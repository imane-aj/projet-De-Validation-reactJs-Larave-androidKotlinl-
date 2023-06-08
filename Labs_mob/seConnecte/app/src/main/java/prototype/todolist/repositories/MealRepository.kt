package prototype.todolist.repositories

import prototype.todolist.dao.MealDao
import prototype.todolist.model.Cart

class MealRepository () {

    private val mealDao = MealDao()

    suspend fun getMeals() = mealDao.getMeals()

    //suspend fun addToCart(token: String, mealId: Int, userId: Int) = mealDao.addToCart(token: String, mealId: Int, userId: Int)

//    suspend fun getFromCart(token: String): List<Cart> {
//        return mealDao.getFromCart(token)
//    }


}