import React from 'react'
import { useState, useEffect } from 'react';
import { Task } from '../../models/Task';
import TaskInput from './TaskInput';
import TaskTable from './TaskTable';

import TaskService from '../../services/task-service';

export default function TaskPage(props) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() =>{
    if(!tasks.length){
      onInitialLoad();
    }
  },
  
  
  );

  async function onInitialLoad() {
    setLoading(true);
    try{
    const tasks = await TaskService.fetchTasks();
    setTasks(tasks.filter((task) => task.userId === props.user.uid)); 
  }catch(err){
  }
  setLoading(false);
}

  async function onTaskCreate(name) {
    const task = await TaskService.createTask(new Task(null, name, false, props.user.uid));
    setTasks([...tasks, task]);
  }

  async function onTaskRemove(taskId) {
    await TaskService.deleteTask(taskId);

    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  async function onTaskCompleteToggle(taskId) {
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    await TaskService.updateTask(taskToToggle);

    setTasks(tasks.map((task) => {
      return task.id === taskId ? taskToToggle : task;
    }));
  }

  return (
    <div className="container mt-5 text-center">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <p>Our Firebase Task List</p>
        <TaskInput onTaskCreate={onTaskCreate}></TaskInput>
        <TaskTable
          tasks={tasks}
          loading={loading}
          onTaskRemove={onTaskRemove}
          onTaskCompleteToggle={onTaskCompleteToggle}
        ></TaskTable>
      </div>
    </div>
  )
}
