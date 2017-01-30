import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { TasksService } from '../_services/tasks.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  id: number;
  Tasks = [];
  TasksReceived = [];
  radio = '';
  Correct = false;
  Wrong = false;
  Display: string = 'none';
  constructor(private route: ActivatedRoute, private tasksService: TasksService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.tasksService.getTasks(this.id).subscribe(t => {
      this.TasksReceived = t;
      console.log(this.Tasks);
      this.Tasks.push(this.TasksReceived.pop());
    })
  }

  onSubmitMultipleChoice(form: any, answer: string) {
    if(form.radio == answer)
    {
      this.Correct = true;
    } else
    {
      this.Wrong = true;
    }
    this.Display = 'inline';
  }

  nextTask(){
    this.Tasks.pop();
    this.Correct = false;
    this.Wrong = false;
    this.Display = 'none';
    let task = this.TasksReceived.pop();
    if(task != null)
    {
      this.Tasks.push(task);
    } else
    {
      task = {
        name: "Alles erledigt",
        description: "Du hast alle Aufgaben in dieser Kategorie erledigt",
        img_src: "/assets/images/done.png"
      }
      this.Tasks.push(task);
    }

  }
}
