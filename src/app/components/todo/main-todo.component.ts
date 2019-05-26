import {Component, OnDestroy, OnInit} from '@angular/core';
import {TasksListModel} from '../../models/tasks-list.model';
import {TaskService} from '../../services/task.service';
import {Observable, Subscription} from 'rxjs';
import {EventService} from '../../services/event.service';
import {takeWhile} from 'rxjs/operators';

@Component({
    selector: 'app-main-todo',
    templateUrl: './main-todo.component.html',
    styleUrls: ['./main-todo.component.scss'],
})
export class MainTodoComponent implements OnInit, OnDestroy {

    public tasksList$: Observable<TasksListModel[]>;
    public tasksList: TasksListModel[];
    private subs: Subscription = new Subscription();
    private sub = true;

    constructor(private taskService: TaskService,
                private eventService: EventService) {
    }

    ngOnInit(): void {
        this.tasksList$ = this.taskService.tasks;
        // this.subs.add(this.taskService.tasks.subscribe((data) => this.tasksList = data));
        // this.taskService.tasks.pipe(
        //     takeWhile(() => this.sub)
        // ).subscribe((data) => this.tasksList = data);
        this.taskService.getData();
        this.eventService.deleteEvent$
            .pipe(
                takeWhile(() => this.sub)
            )
            .subscribe(() => this.taskService.getData());
    }

    ngOnDestroy(): void {
        this.sub = false;
        // this.subs.unsubscribe();
    }
}
