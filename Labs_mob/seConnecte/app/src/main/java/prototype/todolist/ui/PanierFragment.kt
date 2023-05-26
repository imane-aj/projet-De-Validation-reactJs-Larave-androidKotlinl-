//package prototype.todolist.ui
//
//import android.os.Bundle
//import androidx.fragment.app.Fragment
//import android.view.LayoutInflater
//import android.view.View
//import android.view.ViewGroup
//import android.widget.TextView
//import androidx.appcompat.widget.AppCompatImageButton
//import androidx.navigation.fragment.navArgs
//import prototype.todolist.R
//import prototype.todolist.data.MealEntry
//import prototype.todolist.repositories.MealRepository
//
//class PanierFragment : Fragment() {
//    private val args: PanierFragmentArgs by navArgs()
//
//    private lateinit var mealRepository: MealRepository
//    private val selectedMeals: MutableList<MealEntry> = mutableListOf()
//
//    override fun onCreateView(
//        inflater: LayoutInflater, container: ViewGroup?,
//        savedInstanceState: Bundle?
//    ): View? {
//        return inflater.inflate(R.layout.fragment_panier, container, false)
//    }
//
//    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
//        super.onViewCreated(view, savedInstanceState)
//
//        val mealId = args.mealId
//
//        val nameTextView: TextView = view.findViewById(R.id.namePan)
//        val priceTextView: TextView = view.findViewById(R.id.pricePan)
//
//        mealRepository = MealRepository()
//
//        val meal = mealRepository.findById(mealId)
//
//        meal?.let {
//            selectedMeals.add(it)
//        }
//
//        updateUI()
//
//        // Handle click events to add/remove items
//        view.findViewById<AppCompatImageButton>(R.id.add)?.setOnClickListener {
//            meal?.let {
//                if (selectedMeals.contains(it)) {
//                    selectedMeals.remove(it)
//                } else {
//                    selectedMeals.add(it)
//                }
//                updateUI()
//            }
//        }
//    }
//
//    private fun updateUI() {
//        val nameTextView: TextView = requireView().findViewById(R.id.namePan)
//        val priceTextView: TextView = requireView().findViewById(R.id.pricePan)
//
//        if (selectedMeals.isEmpty()) {
//            nameTextView.text = ""
//            priceTextView.text = ""
//        } else {
//            val meal = selectedMeals.last()
//            nameTextView.text = meal.name
//            priceTextView.text = meal.price.toString()
//        }
//    }
//}
//
//
//
//
////class PanierFragment : Fragment() {
////    private val args: PanierFragmentArgs by navArgs()
////
////    private lateinit var mealRepository: MealRepository
////
////    override fun onCreateView(
////        inflater: LayoutInflater, container: ViewGroup?,
////        savedInstanceState: Bundle?
////    ): View? {
////        return inflater.inflate(R.layout.fragment_panier, container, false)
////    }
////
////    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
////        super.onViewCreated(view, savedInstanceState)
////
////        val mealId = args.mealId
////
////        val nameTextView: TextView = view.findViewById(R.id.namePan)
////        val priceTextView: TextView = view.findViewById(R.id.pricePan)
////
////        mealRepository = MealRepository()
////
////        val meal = mealRepository.findById(mealId)
////
////        nameTextView.text = meal?.name
////        priceTextView.text = meal?.price.toString()
////    }
////}
//
