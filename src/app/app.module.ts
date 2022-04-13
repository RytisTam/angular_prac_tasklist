import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskNewComponent } from './components/tasks/task-new/task-new.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskEditComponent } from './components/task-edit/task-edit/task-edit.component';

const tasksRoutes:Routes=[
  {path:'', component:TasksComponent},
  {path:'naujas', component:TaskNewComponent},
  {path:'koreguoti/:index', component:TaskEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    NavigationComponent,
    TaskNewComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(tasksRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
