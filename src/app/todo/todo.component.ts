import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TasksListModel} from '../models/tasks-list.model';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

    public tasksList: TasksListModel[];

    @Input('tasksList') public set setTasksList(tasksList: TasksListModel[]) {
        this.tasksList = tasksList;
    }

    constructor() {

    }

}
