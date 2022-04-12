import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks:Task[]=[];


  constructor(private taskService:TasksService) { 
    taskService.loadTasks();
    this.tasks=taskService.tasks;
  }

  ngOnInit(): void {
  }

  public addNewTask(name:HTMLInputElement, importance:HTMLSelectElement){
    if (name.value !=''){
      this.taskService.addTask(name.value, importance.value);
      name.value = '';
      importance.value = '';
    }
  }


  

}
