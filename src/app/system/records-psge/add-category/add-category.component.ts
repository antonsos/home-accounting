import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../../../shared/services/category.service';
import {CategoryModel} from '../../../shared/models/category.model';
import {MessageModel} from '../../../shared/models/message.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  constructor(private categoryService: CategoryService) { }

  sub1: Subscription;
  message: MessageModel;
  @Output() categoryOnAdd = new EventEmitter<CategoryModel>();
  public isValid: boolean;

  public onFormSubmit(form: NgForm) {
    if (!form.invalid) {
      const { name, capacity } = form.value;
      const data = new CategoryModel(name, capacity);

      this.sub1 = this.categoryService.addCategory(data)
        .subscribe(
          (category: CategoryModel) => {
            this.categoryOnAdd.emit(category);
            form.reset();

            this.message = new MessageModel('success', 'Категория успешно создана');

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

  ngOnInit() {
    this.message = new MessageModel('success', '');
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

}
