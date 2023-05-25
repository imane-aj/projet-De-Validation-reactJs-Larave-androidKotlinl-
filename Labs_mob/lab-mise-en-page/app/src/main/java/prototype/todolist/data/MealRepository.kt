//package prototype.todolist.repository
//
//import org.json.JSONObject
//import prototype.todolist.dao.MealDao
//import prototype.todolist.model.MealEntry
//
//class MealRepository {
//    private val mealDao = MealDao()
//
//    suspend fun getMeals() {
//        val response = mealDao.getMeal()
//        println("API Response: $response") // Print the response for debugging
//        // Rest of the code to parse the response and return meals list
//    }
////    suspend fun findById(id : Int) = mealDao.findById(id)
////
////    suspend fun delete(id : Int) = mealDao.delete(id)
////
////    suspend fun save(meal : MealEntry){
////        if(meal.id == 0){
////            // save
////            mealDao.save(meal)
////        }else{
////            // update
////            mealDao.update(meal)
////        }
////
////    }
//}