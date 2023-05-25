package prototype.todolist.dao

import okhttp3.OkHttpClient
import prototype.todolist.dao.api.Api
import prototype.todolist.model.MealEntry
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class MealDao {

    companion object{
        private val client = OkHttpClient.Builder().build()

        private val retrofit =  Retrofit.Builder()
                .baseUrl("http://127.0.0.1:8000/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .build() //Doesn't require the adapter

        fun <T> buildService(service: Class<T>): T {
            return retrofit.create(service)
        }
        }
    }

    //suspend fun getMeal() = apiService.getMeals()

//    suspend fun findById(id : Int ) = apiService.findById(id)
//
//    suspend fun delete(id : Int ) = apiService.delete(id)
//
//    suspend fun save(task : Task ) = apiService.save(task)
//
//    suspend fun update(task : Task ) = apiService.update(task.id, task)

