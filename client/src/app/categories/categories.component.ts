import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Categories = '';

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe(cat => {
      this.Categories = cat;
      console.log(this.Categories);
    });
  }
}
