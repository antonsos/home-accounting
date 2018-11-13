import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CategoryService} from '../../../shared/services/category.service';
import {CategoryModel} from '../../../shared/models/category.model';
import {NgForm} from '@angular/forms';
import {MessageModel} from '../../../shared/models/message.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  constructor(private categoryService: CategoryService) { }

  sub1: Subscription;
  message: MessageModel;
  @Input() categories: CategoryModel[];
  @Output() onEditCategory = new EventEmitter<CategoryModel>();
  public currentCategory: CategoryModel;

  public onFormSubmit(form: NgForm) {
    if (!form.invalid) {
      const {name, capacity} = form.value;
      const categoryId = this.currentCategory.id;
      const data = new CategoryModel(name, capacity, categoryId);

      this.sub1 = this.categoryService.editCategory(data)
        .subscribe(
          (category: CategoryModel) => {
            this.onEditCategory.emit(category);
            console.log(category);

            this.message.text = 'Категория успешно отредактирована';

            setTimeout(() => {
              this.message.text = '';
            }, 3000);
          },
          error => {
            this.message = new MessageModel('danger', 'Сервер не отвечает');

            setTimeout(() => {
              this.message.text = '';
            }, 3000);
          }
        );
    }
  }

  onCategoryChange(e) {
    const id = +e.target.value;
    this.currentCategory = this.categories.find(category => id === category.id);
  }

  ngOnInit() {
    this.message = new MessageModel('success', '');
    this.currentCategory = this.categories[0];
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

}
