package prototype.todolist

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.widget.Toast
import androidx.activity.result.ActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import android.content.Context
import android.widget.TextView
import prototype.todolist.data.TaskEntry
import prototype.todolist.data.TaskRepository
import prototype.todolist.databinding.ActivityMainBinding
import prototype.todolist.ui.TaskAdapter
import kotlin.random.Random

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        val binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.apply {

            val taskAdapter = TaskAdapter()

            recyclerView.layoutManager = LinearLayoutManager(applicationContext)
            recyclerView.adapter =  taskAdapter
            floatingActionButton.setOnClickListener{

                val strings = resources.getStringArray(R.array.priorities)
                val repository = TaskRepository()
                val newTask = repository.newTask();

//                if(newTask.priority == 1){
//                    newTask.title = "New task" + strings[0]
//                }else if(newTask.priority == 2){
//                    newTask.title = "New task" + strings[1]
//                }else if(newTask.priority == 3){
//                    newTask.title = "New task" + strings[2]
//                }else{
//                    newTask.title = "New task" + Random.nextInt()
//                }
                newTask.title = "New task" + Random.nextInt()
                repository.save(newTask)

                Toast.makeText(applicationContext,"Ajouter une tâche", Toast.LENGTH_LONG).show()
                taskAdapter.notifyDataSetChanged()
            }

        }

    }

}