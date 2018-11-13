import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../../shared/services/bill.service';
import {CategoryService} from '../../shared/services/category.service';
import {EventService} from '../../shared/services/event.service';
import {Observable, Subscription} from 'rxjs';
import {BillModel} from '../../shared/models/bill.model';
import {EventModel} from '../../shared/models/event.model';
import {CategoryModel} from '../../shared/models/category.model';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.css']
})
export class PlanningPageComponent implements OnInit, OnDestroy {

  constructor(
    private billService: BillService,
    private categoryService: CategoryService,
    private eventService: EventService,
  ) { }

  sub1: Subscription;
  isLoaded = false;
  bill: BillModel;
  categoryEvents: EventModel[];
  categories: CategoryModel[];

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.billService.getBill(),
      this.eventService.getEvents(),
      this.categoryService.getCategories()
    ).subscribe((data: [BillModel, EventModel[], CategoryModel[]]) => {
      this.bill = data[0];
      this.categoryEvents = data[1];
      this.categories = data[2];

      this.isLoaded = true;
    });
  }

  getCategoryAmount(category: CategoryModel) {
    const amountList = this.categoryEvents.filter(event => event.category === category.id && event.type === 'outcome');

    return amountList.reduce((total, event) => {
      total += event.amount;
      return total;
    }, 0);
  }

  getPercent(category: CategoryModel, isNum?: boolean): any {
    if (isNum) { return this.getCategoryAmount(category) / (category.capacity / 100); }

    return this.getCategoryAmount(category) / (category.capacity / 100) > 100 ? (
      100 + '%'
    ) : (
      this.getCategoryAmount(category) / (category.capacity / 100) + '%'
    );
  }

  getClass(percent: number): string {
    return percent < 60 ? 'success' : percent > 93 ? 'danger' : 'warning';
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

}
