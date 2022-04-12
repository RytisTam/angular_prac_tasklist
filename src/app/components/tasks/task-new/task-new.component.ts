import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor(private taskService:TasksService, private router:Router) { }

  ngOnInit(): void {
  }


  public addNewTask(name:HTMLInputElement, importance:HTMLSelectElement){
    if (name.value !=''){
      this.taskService.addTask(name.value, importance.value);
      name.value = '';
      importance.value = '';
      this.router.navigate(['/']);
    }
  }

}
