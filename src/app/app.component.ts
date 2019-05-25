import {Component} from '@angular/core';
import {TasksListModel} from './models/tasks-list.model';
import {TaskType} from './models/task-type.enum';
import {TaskModel} from './models/task.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'Angular training';

    public tasksList = [
        new TasksListModel([
                new TaskModel({title: 'TODO 1'}),
                new TaskModel({title: 'TODO 2'}),
                new TaskModel({title: 'TODO 3'}),
            ],
            TaskType.TODO,
            'TODO'),
        new TasksListModel([
                new TaskModel({title: 'IN PROGRESS 1'}),
                new TaskModel({title: 'IN PROGRESS 2'}),
                new TaskModel({title: 'IN PROGRESS 3'}),
            ],
            TaskType.IN_PROGRESS,
            'IN PROGRESS'),
        new TasksListModel([
                new TaskModel({title: 'DONE 1'}),
                new TaskModel({title: 'DONE 2'}),
                new TaskModel({title: 'DONE 3'}),
            ],
            TaskType.DONE,
            'DONE'),
    ];

    constructor() {
    }
}
