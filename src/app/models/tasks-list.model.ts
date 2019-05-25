import {TaskModel} from './task.model';
import {TaskType} from './task-type.enum';

export class TasksListModel {
    tasks: TaskModel[];
    type: TaskType;
    name: string;

    constructor(tasks: TaskModel[], type: TaskType, name: string) {
        this.tasks = tasks || [];
        this.type = type || TaskType.TODO;
        this.name = name;
    }
}
