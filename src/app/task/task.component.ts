import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../models/task.model';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    @Input() public task: TaskModel;
    @Input() public first: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
