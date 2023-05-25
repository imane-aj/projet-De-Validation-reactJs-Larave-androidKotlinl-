package prototype.todolist.ui

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuInflater
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.navigation.findNavController
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import prototype.todolist.R
import prototype.todolist.databinding.FragmentManagerBinding


class ManagerFragment : Fragment() {

    private var _binding: FragmentManagerBinding? = null
    private val binding get() = _binding!!
    private lateinit var recyclerView: RecyclerView
    private lateinit var mealAdapter: MealAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setHasOptionsMenu(true)
    }


    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        // Retrieve and inflate the layout for this fragment
        _binding = FragmentManagerBinding.inflate(inflater, container, false)
        val view = binding.root
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        recyclerView = binding.recyclerView

        this.mealAdapter =  MealAdapter(view.findNavController())
        binding.apply {
            recyclerView.layoutManager = GridLayoutManager(context, 2)
            recyclerView.adapter =  mealAdapter

        }


    }

    /**
     * Frees the binding object when the Fragment is destroyed.
     */
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

//    // Todo : Implémentez le code du button Ajouter une tâche dans le menu
//    override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {
//        inflater.inflate(R.menu.layout_menu, menu)
//
//
//    }
}