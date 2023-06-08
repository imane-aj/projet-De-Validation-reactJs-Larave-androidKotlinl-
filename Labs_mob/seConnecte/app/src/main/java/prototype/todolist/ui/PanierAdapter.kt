package prototype.todolist.ui

import android.content.Context
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageButton
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.widget.AppCompatImageButton
import androidx.cardview.widget.CardView
import androidx.navigation.NavController
import androidx.recyclerview.widget.RecyclerView
import com.squareup.picasso.Picasso
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import prototype.todolist.R
import prototype.todolist.dao.MealDao
import prototype.todolist.model.Cart
import prototype.todolist.model.Meal
import prototype.todolist.repositories.MealRepository

class PanierAdapter(private val carts: ArrayList<Cart>, navController: NavController ,
                  var isLoggedIn: Boolean,
                  private val authViewModel: AuthViewModel,
                  private val mealRepository: MealRepository,
                  private val mealDao: MealDao
)
    : RecyclerView.Adapter<PanierAdapter.DataViewHolder>() {

    private val navController = navController
    class DataViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val mealName: TextView = view.findViewById<Button>(R.id.namePan)
        //val mealQtity: TextView = view.findViewById<Button>(R.id.quantity)
        val mealImg: ImageView = view.findViewById<ImageView>(R.id.imagePan)
        val delete: ImageButton  = view.findViewById(R.id.delete)
        fun bind(cart: Cart) {
            mealName.text = cart.name
            //mealQtity.text = cart.qtity.toString()
            // Load image using Picasso
            val imageUrl = "http://192.168.2.3:8000/images/products/${cart.img}"
            Log.d("img", cart.img.toString())
            Picasso.get().load(imageUrl).into(mealImg)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DataViewHolder {
        val layout = LayoutInflater
            .from(parent.context)
            .inflate(R.layout.panier_item, parent, false)
        return DataViewHolder(layout)
    }

    override fun onBindViewHolder(dataViewHolder: DataViewHolder, position: Int) {
        val cart = carts[position]
        dataViewHolder.bind(cart)

        dataViewHolder.delete.setOnClickListener {

        }
    }

    override fun getItemCount(): Int  = carts.size

    fun addPanier(carts: List<Cart>) {
        this.carts.apply {
            clear()
            addAll(carts)
        }
    }

    private fun showToast(context: Context, message: String) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }

}