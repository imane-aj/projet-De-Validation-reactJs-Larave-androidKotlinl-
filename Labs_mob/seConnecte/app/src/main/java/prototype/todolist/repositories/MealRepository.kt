package prototype.todolist.repositories

import okhttp3.RequestBody
import prototype.todolist.dao.MealDao
import retrofit2.Response
import com.google.gson.JsonObject
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class MealRepository () {

    private val mealDao = MealDao()

    suspend fun getMeals() = mealDao.getMeals()

    suspend fun addToCart(token: String?, mealId: Int) : Response<JsonObject> {
        val nonNullToken = token ?: ""
        return withContext(Dispatchers.IO) {
            mealDao.addToCart(nonNullToken, mealId)
        }
    }


}