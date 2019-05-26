import {Injectable} from '@angular/core';
import {TasksListModel} from '../models/tasks-list.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {TaskType} from '../models/task-type.enum';
import {TaskModel} from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private url = 'http://localhost:3001/tasks';
    private tasksList: TasksListModel[] = [];

    constructor(private httpClient: HttpClient) {
    }

    public get tasks(): Observable<TasksListModel[]> {
        return of(this.tasksList);
    }

    public getData() {
        this.httpClient.get(this.url)
            .pipe(
                tap(console.table),
                map((data: any[]) => [
                    new TasksListModel(
                        data.filter((item) => item.type === TaskType.TODO),
                        TaskType.TODO,
                        'TODO'
                    ),
                    new TasksListModel(
                        data.filter((item) => item.type === TaskType.IN_PROGRESS),
                        TaskType.IN_PROGRESS,
                        'IN PROGRESS'
                    ),
                    new TasksListModel(
                        data.filter((item) => item.type === TaskType.DONE),
                        TaskType.DONE,
                        'DONE'
                    )
                ]),
            )
            .subscribe((data) => {
                this.tasksList.length = 0;
                this.tasksList.push(...data);
            });
    }

    public getTask(id: string): Observable<TaskModel> {
        return this.httpClient
            .get(`${this.url}/${id}`)
            .pipe(
                map((data) => new TaskModel(data)),
                catchError((err) => {
                    console.error(err);
                    return of(null);
                })
            );
    }

    public addTask(task: TaskModel, type: TaskType) {
        return this.httpClient.post(this.url, {...task, type}).pipe(
            catchError((err) => {
                console.error(err);
                return of(null);
            })
        );
    }

    public editTask(task: TaskModel, type: TaskType) {
        return this.httpClient.put(
            `${this.url}/${task.id}`,
            {...task, type}
        )
            .pipe(
                catchError((err) => {
                    console.error(err);
                    return of(null);
                })
            );
    }

    public deleteTask(task: TaskModel) {
        return this.httpClient.delete(`${this.url}/${task.id}`)
            .pipe(
                catchError((err) => {
                    console.error(err);
                    return of(null);
                })
            );
    }
}
