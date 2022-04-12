import { Injectable } from '@angular/core';
import { Task } from '../models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Task[]=[];
  public selectedImportance:string='';
  public inputTaskName:string='';


  constructor() { }

  public loadTasks(){
    let data=localStorage.getItem("tasks");
    data != null ? this.tasks=JSON.parse(data) : null;
  }

  public saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  public addTask(name:string, importance:string){
    this.tasks.push({
      taskName:name,
      importance:importance,
    })
      this.saveTasks();
  }

  public removeTask(i:number){
    this.tasks.splice(i,1);
    this.saveTasks();
  }
}


