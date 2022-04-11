import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks:Task[]=[];
  public selectedImportance:string='Nesvarbu';
  public inputTaskName:string='';

  constructor() { 
    let LocalStorageData = localStorage.getItem('tasks');
    if (LocalStorageData != null){
      this.tasks = JSON.parse(LocalStorageData);
    }
    console.log(this.tasks);
  }

  ngOnInit(): void {
  }



  public addNewTask(){
    if (this.inputTaskName != null && this.selectedImportance != null){
      this.tasks.push({
        taskName:this.inputTaskName,
        importance:this.selectedImportance,
      })
      this.inputTaskName = '';
      this.selectedImportance = 'Nesvarbu';
      this.save();

    }
  }

  public removeTask(i:number){
    this.tasks.splice(i,1);
    this.save();
  }

  private save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
