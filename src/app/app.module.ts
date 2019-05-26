import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskComponent} from './components/task/task.component';
import {TasksListComponent} from './components/tasks-list/tasks-list.component';
import {MainTodoComponent} from './components/todo/main-todo.component';
import {HttpClientModule} from '@angular/common/http';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddTaskRxComponent} from './components/add-task-rx/add-task-rx.component';
import {MaterialComponentsModule} from './material-components/material-components.module';

@NgModule({
    declarations: [
        AppComponent,
        TaskComponent,
        TasksListComponent,
        MainTodoComponent,
        AddTaskComponent,
        AddTaskRxComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
