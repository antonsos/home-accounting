import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../shared/models/category.model';
import {CategoryService} from '../../shared/services/category.service';

@Component({
  selector: 'app-records-psge',
  templateUrl: './records-psge.component.html',
  styleUrls: ['./records-psge.component.css']
})
export class RecordsPsgeComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  public categories: CategoryModel[] = [];
  public isLoaded = false;

  ngOnInit() {
    this.categoryService.getCategories()
      .delay(500)
      .subscribe(res => {
        this.categories = res;
        this.isLoaded = true;
      });
  }

  newCategoryAdd(newCategory: CategoryModel) {
    this.categories.push(newCategory);
  }

  editCategory(editCategory: CategoryModel) {
    const index = this.categories.findIndex(item => editCategory.id === item.id);
    this.categories[index].name = editCategory.name;
    this.categories[index].capacity = editCategory.capacity;
    this.categories[index].id = editCategory.id;
  }

}
