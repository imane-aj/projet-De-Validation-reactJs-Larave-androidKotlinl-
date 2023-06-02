package prototype.todolist.dao.api

import com.google.gson.JsonObject
import okhttp3.RequestBody
import prototype.todolist.model.LoginResponse
import prototype.todolist.model.Meal
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.DELETE
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.Headers
import retrofit2.http.PATCH
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Query

interface MealApiInterface {

    @Headers("api-password: Eld5TBhHgiIZgJk4c4VEtlnNxY")
    @GET("randomProduct")
    suspend fun getMeals(): Response<JsonObject>

    @Headers("api-password: Eld5TBhHgiIZgJk4c4VEtlnNxY")
    @POST("login")
    suspend fun login(@Body requestBody: RequestBody): Response<LoginResponse>

    @POST("cart")
    suspend fun addToCart(
        @Header("Authorization") token: String,
        @Query("mealId") mealId: Int
    ): Response<JsonObject>
}