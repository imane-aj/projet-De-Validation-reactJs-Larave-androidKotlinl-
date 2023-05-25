package prototype.todolist.ui

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.widget.AppCompatImageButton
import androidx.cardview.widget.CardView
import androidx.fragment.app.FragmentManager
import androidx.navigation.NavController
import androidx.navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import prototype.todolist.R
import prototype.todolist.data.MealEntry
import prototype.todolist.data.MealRepository


class MealAdapter(navController: NavController) : RecyclerView.Adapter<MealAdapter.MealViewHolder>() {

    private val mealRepository = MealRepository()
    private val navController = navController
    private var meals: List<MealEntry> = emptyList()

    class MealViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val mealName: TextView = view.findViewById<Button>(R.id.namePan)
        val mealPrice: TextView = view.findViewById<Button>(R.id.pricePan)
        val mealImg: ImageView = view.findViewById<ImageView>(R.id.imagePan)
        val add: AppCompatImageButton  = view.findViewById(R.id.add)
        val cardView: CardView = view.findViewById(R.id.cardview)

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MealViewHolder {
        val layout = LayoutInflater
            .from(parent.context)
            .inflate(R.layout.task_item, parent, false)
        return MealViewHolder(layout)
    }

    override fun getItemCount(): Int {
        return mealRepository.getAllMeals().size
    }

    override fun onBindViewHolder(mealViewHolder: MealViewHolder, position: Int) {
        val meal = this.mealRepository.getAllMeals()[position]
        mealViewHolder.mealName.text = meal.name
        mealViewHolder.mealPrice.text = meal.price.toString()
        //mealViewHolder.mealImg.setImageResource(meal.picture)


        mealViewHolder.add.setOnClickListener{
            val action = ManagerFragmentDirections.actionManagerFragmentToPanierFragment(mealId = meal.id)
            navController.navigate(action)
        }
    }

    fun setMeals(meals: List<MealEntry>) {
        this.meals = meals
        notifyDataSetChanged()
    }

}