import {Component, OnInit} from '@angular/core';
import {TaskType} from '../../models/task-type.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskModel} from '../../models/task.model';
import {TaskService} from '../../services/task.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-task-rx',
    templateUrl: './add-task-rx.component.html',
    styleUrls: ['./add-task-rx.component.scss']
})
export class AddTaskRxComponent implements OnInit {

    public taskTypeEnum = TaskType;
    public form: FormGroup;
    public error = false;

    constructor(private formBuilder: FormBuilder,
                private taskService: TaskService,
                private router: Router) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            type: [TaskType.TODO, [Validators.required]]
        });
    }

    onReset() {
        this.form.reset({
            type: TaskType.TODO
        });
        this.error = false;
        // this.form.patchValue(new TaskModel({title: 'default'}));
    }

    onTitleChange() {
        this.error = false;
    }

    onSubmit() {
        if (!this.form.valid) {
            this.error = true;
            return;
        }
        const task = new TaskModel(this.form.value);
        this.taskService.addTask(task, this.form.value.type)
            .subscribe((data) => {
                if (data === null) {
                    this.error = true;
                } else {
                    this.router.navigate(['/todo']);
                }
            });
    }

}
