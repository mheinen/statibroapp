var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../_services/tasks.service';
export var TasksComponent = (function () {
    function TasksComponent(route, tasksService) {
        this.route = route;
        this.tasksService = tasksService;
        this.Tasks = [];
        this.TasksReceived = [];
        this.radio = '';
        this.Correct = false;
        this.Wrong = false;
        this.Display = 'none';
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.tasksService.getTasks(this.id).subscribe(function (t) {
            _this.TasksReceived = t;
            console.log(_this.Tasks);
            _this.Tasks.push(_this.TasksReceived.pop());
        });
    };
    TasksComponent.prototype.onSubmitMultipleChoice = function (form, answer) {
        if (form.radio == answer) {
            this.Correct = true;
        }
        else {
            this.Wrong = true;
        }
        this.Display = 'inline';
    };
    TasksComponent.prototype.nextTask = function () {
        this.Tasks.pop();
        this.Correct = false;
        this.Wrong = false;
        this.Display = 'none';
        var task = this.TasksReceived.pop();
        if (task != null) {
            this.Tasks.push(task);
        }
        else {
            task = {
                name: "Alles erledigt",
                description: "Du hast alle Aufgaben in dieser Kategorie erledigt",
                img_src: "/assets/images/done.png"
            };
            this.Tasks.push(task);
        }
    };
    TasksComponent = __decorate([
        Component({
            selector: 'app-tasks',
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, TasksService])
    ], TasksComponent);
    return TasksComponent;
}());
//# sourceMappingURL=G:/Projekte/statibroapp/client/src/app/tasks/tasks.component.js.map