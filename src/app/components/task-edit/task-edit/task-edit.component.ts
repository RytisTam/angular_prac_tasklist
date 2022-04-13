import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  public index:number=0;
  public taskName:string='';
  public importance:string='';

  constructor(  private taskService:TasksService,
                private router:Router,
                private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.index=this.route.snapshot.params['index'];
    const tasks=this.taskService.getTask(this.index);
    this.taskName=tasks.taskName;
    this.importance=tasks.importance;
  }

  public update(){
    this.taskService.update(this.index, this.taskName, this.importance);
    this.router.navigate(['/']);
  }

}
