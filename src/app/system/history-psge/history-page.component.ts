import {Component, OnDestroy, OnInit} from '@angular/core';
import * as moment from 'moment';
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
  public filterEvents: EventModel[] = [];
  public chartData: any[] = [];
  public isVisibleFilter = false;

  calculateDataChart() {
    this.filterEvents.map(event => {
      const category = this.categories.find(item => event.category === item.id);

      if (event.type === 'outcome') {
        const dataEvent = this.chartData.find(item => item.name === category.name);
        if (dataEvent) {
          dataEvent['value'] += event.amount;
        } else {
          this.chartData.push({name: category.name, value: event.amount});
        }
      }
    });
  }

  openFilter() {
    this.isVisibleFilter = !this.isVisibleFilter;
  }

  filterOnApply(filter) {
    this.setCopyFilter();

    const startPerion = moment().startOf(filter.period).startOf('d');
    const endPerion = moment().endOf(filter.period).endOf('d');

    this.filterEvents = this.filterEvents
      .filter(item => filter.types.indexOf(item.type) !== -1)
      .filter(item => filter.categories.indexOf(item.category) === -1)
      .filter(item => {
        const momentData = moment(item.date, 'DD.MM.YYYY HH:mm:ss');
        return momentData.isBetween(startPerion, endPerion);
      });

    this.chartData = [];
    this.calculateDataChart();
    this.isVisibleFilter = !this.isVisibleFilter;
  }

  filterOnClose() {
    this.isVisibleFilter = !this.isVisibleFilter;
    this.setCopyFilter();
    this.chartData = [];
    this.calculateDataChart();
  }

  private setCopyFilter() {
    this.filterEvents = this.events;
  }

  ngOnInit() {
    Observable.combineLatest(
      this.categoryService.getCategories(),
      this.eventService.getEvents()
    ).subscribe((data: [CategoryModel[], EventModel[]]) => {
      this.categories = data[0];
      this.events = data[1];

      this.setCopyFilter();
      this.calculateDataChart();
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

}
