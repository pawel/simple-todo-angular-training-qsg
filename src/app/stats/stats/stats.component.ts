import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TasksListModel } from 'src/app/models/tasks-list.model';
import { TaskType } from 'src/app/models/task-type.enum';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {


  public stats: {
    todo: number,
    inProgress: number,
    done: number
  } = { todo: 0, inProgress: 0, done: 0 };

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getData();
    this.taskService.tasks.subscribe((data: TasksListModel[]) => {
      this.stats.todo = data.find((item) => item.type === TaskType.TODO).tasks.length;
      this.stats.inProgress = data.find((item) => item.type === TaskType.IN_PROGRESS).tasks.length;
      this.stats.done = data.find((item) => item.type === TaskType.DONE).tasks.length;
    })
  }

  ngOnDestroy(): void {
    // noop
  }

}
