import * as uuid from 'uuid/v4';
import {TaskInterface} from './task.interface';

export class TaskModel implements TaskInterface {
    id: string;
    title: string;

    constructor(opts?: Partial<TaskInterface>) {
        opts = opts || {};
        this.id = opts.id || uuid();
        this.title = opts.title;
    }

}
