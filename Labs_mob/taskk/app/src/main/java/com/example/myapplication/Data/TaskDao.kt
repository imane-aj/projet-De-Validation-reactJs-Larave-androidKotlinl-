package com.example.myapplication.Data

class TaskDao {
    companion object {
        private var task_count = 0
        private var list_tasks : MutableList<TaskEntry> = mutableListOf<TaskEntry>()
        init {
            for( i in 1..10){

                val task = TaskEntry(++task_count,"Task $i",1,System.currentTimeMillis())
                list_tasks.add(0,task)
            }
        }
    }

    private fun findIndexById(id: Int): Int {
        val idx = TaskDao.list_tasks.withIndex().filter { it.value.id == id }.map{it.index}.first()
        return idx
    }

    fun insert (taskEntry : TaskEntry){
        taskEntry.id = ++TaskDao.task_count
        TaskDao.list_tasks.add(0, taskEntry)
    }
    fun delete(id: Int){
        var idx = this.findIndexById(id)
        list_tasks.removeAt(idx)
    }

    fun update(taskEntry: TaskEntry){
        var idx = this.findIndexById(taskEntry.id);
        TaskDao.list_tasks[idx] = taskEntry
    }


    fun getAllTasks(): MutableList<TaskEntry> {
        return TaskDao.list_tasks
    }

    fun findById(id: Int) :TaskEntry {
        val task = TaskDao.list_tasks.filter { it.id == id }.first()
        return task
    }

}