package prototype.todolist.ui

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.icu.text.SimpleDateFormat
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.activity.result.ActivityResult
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.cardview.widget.CardView
import androidx.recyclerview.widget.RecyclerView
import prototype.todolist.R
import prototype.todolist.data.TaskEntry
import prototype.todolist.data.TaskRepository
import java.util.Date
import java.util.Locale


class TaskAdapter() : RecyclerView.Adapter<TaskAdapter.TaskViewHolder>() {


    private val taskRepository = TaskRepository()
    class TaskViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val taskTitle: TextView = view.findViewById<Button>(R.id.taskTitle)
        val taskPriority: TextView = view.findViewById<Button>(R.id.taskPriority)
        val priorityArray: Array<String> = view.resources.getStringArray(R.array.priorities)
        val taskTimestamp: TextView = view.findViewById<Button>(R.id.taskTimestamp)
        val cardView: CardView = view.findViewById(R.id.cardview)

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TaskViewHolder {
        val layout = LayoutInflater
            .from(parent.context)
            .inflate(R.layout.task_item, parent, false)
        return TaskViewHolder(layout)
    }

    override fun getItemCount(): Int {
        return taskRepository.getAllTasks().size
    }

    override fun onBindViewHolder(taskViewHolder: TaskViewHolder, position: Int) {
        val task = this.taskRepository.getAllTasks()[position]
        taskViewHolder.taskTitle.text = task.title
        if(task.priority == 1){
            taskViewHolder.taskPriority.text = taskViewHolder.priorityArray[0]
        }else if(task.priority == 2){
            taskViewHolder.taskPriority.text = taskViewHolder.priorityArray[1]
        }else if(task.priority == 3){
            taskViewHolder.taskPriority.text = taskViewHolder.priorityArray[2]
        }
        val dateFormat = SimpleDateFormat("dd/MM/yyyy HH:mm:ss", Locale.getDefault())

        // Convert the timestamp to a Date object
        val date = Date(task.timestamp)

        // Format the date and set it to the taskTimestamp TextView
        val formattedDate = dateFormat.format(date)
        taskViewHolder.taskTimestamp.text = formattedDate

        taskViewHolder.cardView.setOnClickListener {

            task.title = task.title + "+"
            // Todo : supprimer ces deux lignes et voir est ce que RecyclerView continue d'afficher les updates ?
//            val repository = TaskRepository()
//            repository.save(task)
            //  oui RecyclerView continue d'afficher les updates
            this.notifyDataSetChanged()

            // Todo : Afficher un message aprés Update
            //Toast.makeText(this,"Update $task", Toast.LENGTH_LONG).show()
            Toast.makeText(taskViewHolder.itemView.context, "Update ${task.title}", Toast.LENGTH_LONG).show()
        }
    }

}