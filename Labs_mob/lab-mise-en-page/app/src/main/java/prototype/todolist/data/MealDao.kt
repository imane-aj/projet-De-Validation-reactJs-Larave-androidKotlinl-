package prototype.todolist.data

class MealDao {

    companion object {
        private var meal_count = 0
        private var list_meals : MutableList<MealEntry> = mutableListOf<MealEntry>()

        init {
            for( i in 1..10){

                val meal = MealEntry(++meal_count,"Meal $i",1.01,null)
                list_meals.add(0,meal)
            }
        }
    }

    fun insert(mealEntry: MealEntry){
        mealEntry.id = ++MealDao.meal_count
        MealDao.list_meals.add(0,mealEntry)
    }

    fun delete(id: Int){
        var index = this.findIndexById(id)
        list_meals.removeAt(index)
    }

    fun update(mealEntry: MealEntry){
        var index = this.findIndexById(mealEntry.id);
        MealDao.list_meals[index] = mealEntry
    }

    private fun findIndexById(id: Int): Int {
        val index = MealDao.list_meals.withIndex().filter { it.value.id == id }.map{it.index}.first()
        return index
    }


    fun getAllMeals(): MutableList<MealEntry> {
        return MealDao.list_meals
    }

    fun findById(id: Int) :MealEntry {
        val meal = MealDao.list_meals.filter { it.id == id }.first()
        return meal
    }


}