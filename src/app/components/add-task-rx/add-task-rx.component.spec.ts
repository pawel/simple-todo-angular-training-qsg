import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTaskRxComponent} from './add-task-rx.component';

describe('AddTaskRxComponent', () => {
  let component: AddTaskRxComponent;
  let fixture: ComponentFixture<AddTaskRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
