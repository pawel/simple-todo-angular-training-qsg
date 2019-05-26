import {Component, Input, OnInit} from '@angular/core';
import {TasksListModel} from '../../models/tasks-list.model';
import {TaskType} from '../../models/task-type.enum';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

    @Input() public tasksList: TasksListModel;
    public taskTypeEnum = TaskType;

    constructor() {
    }

    ngOnInit() {
    }

}
