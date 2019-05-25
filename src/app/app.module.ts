import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskComponent} from './task/task.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {TodoComponent} from './todo/todo.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskComponent,
        TasksListComponent,
        TodoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
