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
import { CategoriesService } from '../_services/categories.service';
export var CategoriesComponent = (function () {
    function CategoriesComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.Categories = '';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getAllCategories().subscribe(function (cat) {
            _this.Categories = cat;
            console.log(_this.Categories);
        });
    };
    CategoriesComponent = __decorate([
        Component({
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.css']
        }), 
        __metadata('design:paramtypes', [CategoriesService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
//# sourceMappingURL=G:/Projekte/statibroapp/client/src/app/categories/categories.component.js.map