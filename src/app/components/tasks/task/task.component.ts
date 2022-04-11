import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() public task:Task={taskName:"", importance:""};
  @Input() public index:number=0;

  @Output() public afterRemoveTask=new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  public deleteTask(){
    this.afterRemoveTask.emit(this.index);
  }

}
