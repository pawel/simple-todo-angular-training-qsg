import {TaskModel} from './task.model';
import {TaskType} from './task-type.enum';

export class TasksListModel {
    tasks: TaskModel[];
    type: TaskType;
    name: string;

    constructor(tasks: TaskModel[], type: TaskType, name: string) {
        this.tasks = (tasks || []).map((item) => new TaskModel(item));
        this.type = type || TaskType.TODO;
        this.name = name;
    }
}
