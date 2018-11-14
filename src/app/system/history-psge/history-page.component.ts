import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventService} from '../../shared/services/event.service';
import {CategoryService} from '../../shared/services/category.service';
import {Observable, Subscription} from 'rxjs';
import {CategoryModel} from '../../shared/models/category.model';
import {EventModel} from '../../shared/models/event.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  constructor(
    private eventService: EventService,
    private categoryService: CategoryService
  ) { }

  private sub1: Subscription;
  public isLoaded: boolean;
  public categories: CategoryModel[];
  public events: EventModel[];
  public chartData: any[] = [];

  calculateDataChart() {
    this.events.map(event => {
      const category = this.categories.find(item => event.category === item.id);

      if (event.type === 'outcome') {
        if (this.chartData[category.id - 1]) {
          const value = this.chartData[category.id - 1]['value'] + event.amount;
          this.chartData[category.id - 1]['value'] = value;
        } else {
          this.chartData[category.id - 1] = {name: category.name, value: event.amount};
        }
      }
    });
    console.log(this.chartData)
  }

  ngOnInit() {
    Observable.combineLatest(
      this.categoryService.getCategories(),
      this.eventService.getEvents()
    ).subscribe((data: [CategoryModel[], EventModel[]]) => {
      this.categories = data[0];
      this.events = data[1];

      this.calculateDataChart();
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

}
