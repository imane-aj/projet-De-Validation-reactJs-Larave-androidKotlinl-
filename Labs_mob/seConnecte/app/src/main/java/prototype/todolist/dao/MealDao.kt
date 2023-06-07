package prototype.todolist.dao
import android.util.Log
import prototype.todolist.dao.api.MealApiInterface
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import com.google.gson.Gson
import com.google.gson.JsonArray
import com.google.gson.JsonObject
import prototype.todolist.model.LoginResponse
import prototype.todolist.model.Meal
import retrofit2.Response
import okhttp3.RequestBody
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.RequestBody.Companion.toRequestBody
import prototype.todolist.model.Cart
import prototype.todolist.model.CartResponse


class MealDao {

    companion object {

        private var BASE_URL = "http://192.168.2.3:8000/api/"
        private val gson = Gson()

        private fun getRetrofit(): Retrofit {
            return Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .build() // Doesn't require the adapter
        }

        val apiService: MealApiInterface = getRetrofit().create(MealApiInterface::class.java)
    }

    suspend fun getMeals(): List<Meal> {
        val response: Response<JsonObject> = apiService.getMeals()
        Log.d(response.code().toString(), "Response Code")
        if (response.isSuccessful) {
            val responseBody: JsonObject? = response.body() as? JsonObject
            val dataObject: JsonObject? = responseBody?.getAsJsonObject("data")
            val mealsArray: JsonArray? = dataObject?.getAsJsonArray("data")

            val mealList = mutableListOf<Meal>()

            mealsArray?.forEach { jsonElement ->
                if (jsonElement.isJsonObject) {
                    val mealObject: JsonObject = jsonElement.asJsonObject
                    val id: Int? = mealObject.get("id")?.asInt
                    val name: String? = mealObject.get("name")?.asString
                    val price: Double? = mealObject.get("price")?.asDouble
                    val imageUrl: String? = mealObject.get("img")?.asString

                    if (id != null && name != null && price != null) {
                        val meal = Meal(id, name, price, imageUrl)
                        mealList.add(meal)
                    }
                }
            }

            return mealList
        }

        throw Exception("Failed to get meals")
    }

    suspend fun login(email: String, password: String): Response<LoginResponse> {
        val requestBody = createLoginRequestBody(email, password)
        return apiService.login(requestBody)
    }

    private fun createLoginRequestBody(email: String, password: String): RequestBody {
        val requestBodyJson = "{\"email\": \"$email\", \"password\": \"$password\"}"
        val mediaType = "application/json".toMediaTypeOrNull()
        return requestBodyJson.toRequestBody(mediaType)
    }

    suspend fun addToCart(token: String?, productId: Int, userId: Int?): Response<CartResponse> {
        return try {
            apiService.addToCart(token, productId, userId)
        } catch (e: Exception) {
            // Log the exception for debugging
            Log.e("addToCart", "An error occurred: ${e.message}", e)
            throw Exception("An error occurred while adding the meal to the cart: ${e.message}")
        }
    }

    suspend fun getFromCart(token: String): List<Cart> {
        val response: Response<JsonObject> = apiService.getFromCart(token)
        Log.d(response.code().toString(), "Response Code")
        if (response.isSuccessful) {
            val responseBody: JsonObject? = response.body() as? JsonObject
            val dataObject: JsonObject? = responseBody?.getAsJsonObject("data")
            val cartItemsArray: JsonArray? = dataObject?.getAsJsonArray("data")

            val cartList = mutableListOf<Cart>()

            cartItemsArray?.forEach { jsonElement ->
                if (jsonElement.isJsonObject) {
                    val cartItemObject: JsonObject = jsonElement.asJsonObject
                    val quantity: Int? = cartItemObject.get("qtity")?.asInt
                    val imageUrl: String? = cartItemObject.get("img")?.asString
                    val name: String? = cartItemObject.get("name")?.asString
                    val productId: Int = cartItemObject.get("product_id")?.asInt ?: 0
                    val userId: Int = cartItemObject.get("user_id")?.asInt ?: 0

                    val cartItem = Cart(quantity, imageUrl, name, productId, userId)
                    cartList.add(cartItem)
                }
            }

            return cartList
        }

        throw Exception("Failed to get cart items")
    }


}
