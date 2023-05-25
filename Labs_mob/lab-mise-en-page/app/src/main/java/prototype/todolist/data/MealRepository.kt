package prototype.todolist.data

class MealRepository () {

    private val mealDao = MealDao()
    private fun insert(mealEntry: MealEntry) = mealDao.insert(mealEntry)
    private fun update(mealEntry: MealEntry) = mealDao.update(mealEntry)
    fun delete(mealId: Int) = mealDao.delete(mealId)
    fun getAllMeals() = mealDao.getAllMeals()
    fun findById(id: Int) = mealDao.findById(id)
    fun newMeal(): MealEntry {
        return MealEntry(0,"meal",1.01,null)
    }

    fun save(mealEntry: MealEntry) {

        if(mealEntry.id == 0){
            this.insert(mealEntry)
        }else{
            this.update(mealEntry)
        }
    }
}