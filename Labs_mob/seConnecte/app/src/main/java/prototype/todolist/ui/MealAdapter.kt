package prototype.todolist.ui

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.widget.AppCompatImageButton
import androidx.cardview.widget.CardView
import androidx.navigation.NavController
import androidx.recyclerview.widget.RecyclerView
import prototype.todolist.R
import prototype.todolist.model.Meal

class MealAdapter(private val meals: ArrayList<Meal>, navController: NavController , private val isLoggedIn: Boolean)
    : RecyclerView.Adapter<MealAdapter.DataViewHolder>() {

    private val navController = navController

    class DataViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val mealName: TextView = view.findViewById<Button>(R.id.namePan)
        val mealPrice: TextView = view.findViewById<Button>(R.id.pricePan)
        val mealImg: ImageView = view.findViewById<ImageView>(R.id.imagePan)
        val add: AppCompatImageButton  = view.findViewById(R.id.add)
        val cardView: CardView = view.findViewById(R.id.cardview)
        fun bind(meal: Meal) {
            mealName.text = meal.name
            mealPrice.text = meal.price.toString()
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DataViewHolder {
        val layout = LayoutInflater
            .from(parent.context)
            .inflate(R.layout.task_item, parent, false)
        return DataViewHolder(layout)
    }

    override fun getItemCount(): Int  = meals.size

    override fun onBindViewHolder(dataViewHolder: DataViewHolder, position: Int) {

        val meal = meals[position]
        dataViewHolder.bind(meal)

        dataViewHolder.add.setOnClickListener {
            val context = dataViewHolder.itemView.context
            if (isLoggedIn) {
                // User is logged in, show data added message
                showToast(context, "The meal was added successfully")
//
            } else {
                // User is not logged in, show login message
                showToast(context, "Please login to add meal")
                val action = ManagerFragmentDirections.actionManagerFragmentToLoginFragment()
                navController.navigate(action)
            }
        }
    }

    fun addMeals(meals: List<Meal>) {
        this.meals.apply {
            clear()
            addAll(meals)
        }
    }

    private fun showToast(context: Context, message: String) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }

}