package com.example.myapplication

import com.example.myapplication.Data.TaskEntry
import com.example.myapplication.Data.TaskRepository


fun main (){

    val taskRepository = TaskRepository()

    val task = TaskEntry(1,"Task 50",1,System.currentTimeMillis())
    taskRepository.save(task);
    println(task)


    // Suprimer une tâche
    // taskRepository.delete(1)

    // Modifier une tâche
    val updateTask = taskRepository.findById(1)
    updateTask.title = "task 60"
    println(updateTask)
    taskRepository.save(updateTask)
    println(updateTask)

    // Afficher les tâches
    for(item in taskRepository.getAllTasks()){
        println(item.title)
    }

}