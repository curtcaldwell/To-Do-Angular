import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "incompleteTasks";

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }
  toggleDone(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.done = setCompleteness;
  }

  priorityColor(currentTask)
  {
    switch(currentTask.priority)
    {
      case 2:
      return "bg-warning";
      case 3:
      return "bg-danger";
      default:
      return "bg-info";
    }
  }
}
