import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainTodoComponent} from './components/todo/main-todo.component';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {AddTaskRxComponent} from './components/add-task-rx/add-task-rx.component';

const routes: Routes = [
    { path: 'todo', component: MainTodoComponent },
    { path: 'add-task-rx', component: AddTaskRxComponent },
    { path: 'add-task', component: AddTaskComponent },
    {path: '', redirectTo: '/todo', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
