import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../shared/models/category.model';
import {EventModel} from '../../../shared/models/event.model';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.css']
})
export class HistoryEventsComponent implements OnInit {

  constructor() { }

  @Input() categories: CategoryModel[];
  @Input() events: EventModel[];
  public searchValue = '';
  public searchPlaceholder = 'Сумма';
  public searchField = 'amount';

  getEventClass(event: EventModel): string {
    return event.type === 'income' ? 'card-success' : 'card-danger';
  }

  changeCriteria(field: string) {
    const nameField = {
      amount: 'Сумма',
      date: 'Дата',
      category: 'Категория',
      type: 'Тип',
    };

    this.searchPlaceholder = nameField[field];
    this.searchField = field;
  }

  ngOnInit() {
    this.events.map(event => {
      event.catName = this.categories.find(category => event.category === category.id).name;
    });
  }

}
