import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CategoryModel} from '../../../shared/models/category.model';
import {EventModel} from '../../../shared/models/event.model';
import {BillService} from '../../../shared/services/bill.service';
import {EventService} from '../../../shared/services/event.service';
import {BillModel} from '../../../shared/models/bill.model';
import {MessageModel} from '../../../shared/models/message.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {

  constructor(
    private billService: BillService,
    private eventService: EventService,
  ) { }

  sub1: Subscription;
  message: MessageModel;
  @Input() categories: CategoryModel[];
  public types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'},
  ];

  onSubmit(form: HTMLFormElement) {
    if (!form.invalid) {
      const {type, amount, category, description} = form.value;
      const date = '' + (new Date()).toLocaleDateString(
        'ru-Ru',
        {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}
        );
      const data = new EventModel(
        type,
        amount,
        +category,
        date,
        description
      );

      this.billSubmit(type, amount, data, form);
    }
  }

  billSubmit(type: string, amount: number, data: EventModel, form: HTMLFormElement) {
    this.sub1 = this.billService.getBill()
      .subscribe((bill: BillModel) => {
        let value = 0;

        if (type === 'outcome') {
          if (bill.value < amount) {
            this.message = new MessageModel('danger', 'Не достаточно средств');

            setTimeout(() => {
              this.message.text = '';
            }, 3000);
          } else {
            value = bill.value - amount;

            this.billUpdateSubmit(value, data, form);
          }
        } else {
          value = bill.value + amount;

          this.billUpdateSubmit(value, data, form);
        }
      });
  }

  billUpdateSubmit(value: number, data: EventModel, form: HTMLFormElement) {
    const newBill = new BillModel(value, 'RUB');

    this.billService.updateBill(newBill)
      .mergeMap(() => this.eventService.addEvent(data))
      .subscribe(() => {
        form.setValue({
          type: 'outcome',
          amount: 1,
          category: 1,
          description: ' '
        });

        this.message = new MessageModel('success', 'Событие успешно создано');

        setTimeout(() => {
          this.message.text = '';
        }, 3000);
      },
      error => {
        this.message = new MessageModel('danger', 'Сервер не отвечает');

        setTimeout(() => {
          this.message.text = '';
        }, 3000);
      });
  }

  ngOnInit() {
    this.message = new MessageModel('success', '');
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

}
