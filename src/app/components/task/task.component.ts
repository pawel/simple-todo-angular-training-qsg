import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/task.model';
import {TaskService} from '../../services/task.service';
import {EventService} from '../../services/event.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    @Input() public task: TaskModel;
    @Input() public first: boolean;

    constructor(private taskService: TaskService,
                private eventService: EventService) {
    }

    ngOnInit() {
    }

    handleDelete() {
        this.taskService.deleteTask(this.task)
            .subscribe((data) => {
                if (data) {
                    this.eventService.deleteEvent$.next(this.task);
                }
            });
    }

}
