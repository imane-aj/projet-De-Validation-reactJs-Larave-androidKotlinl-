package prototype.todolist.ui

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.cardview.widget.CardView
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.Data.TaskRepository
import com.example.myapplication.R
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale


class TaskAdapter() : RecyclerView.Adapter<TaskAdapter.TaskViewHolder>() {


    private val taskRepository = TaskRepository()
    class TaskViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val taskTitle: TextView = view.findViewById<Button>(R.id.task)


        val taskPriority: TextView = view.findViewById<Button>(R.id.priority)
        val priorityArray: Array<String> = view.resources.getStringArray(R.array.priorities)
        val taskTimestamp: TextView = view.findViewById<Button>(R.id.date)
        val cardView: CardView = view.findViewById(R.id.cardview)

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TaskViewHolder {
        val layout = LayoutInflater
            .from(parent.context)
            .inflate(R.layout.items, parent, false)
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
//        val dateFormat = SimpleDateFormat("dd/MM/yyyy HH:mm:ss", Locale.getDefault())
//
//        // Convert the timestamp to a Date object
//        val date = Date(task.timestamp.toString())
//
//        // Format the date and set it to the taskTimestamp TextView
//        val formattedDate = dateFormat.format(date)
//        taskViewHolder.taskTimestamp.text = formattedDate

        taskViewHolder.cardView.setOnClickListener {

            task.title = task.title + "+"
            this.notifyDataSetChanged()
            Toast.makeText(taskViewHolder.itemView.context, "Update ${task.title}", Toast.LENGTH_LONG).show()
        }
    }

}