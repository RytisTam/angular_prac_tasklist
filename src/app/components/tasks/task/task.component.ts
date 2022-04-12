import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() public task:Task={taskName:"", importance:""};
  @Input() public index:number=0;

  @Output() public afterRemoveTask=new EventEmitter<number>();


  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
  }

  public deleteTask(){
    this.taskService.removeTask(this.index);
  }

}
