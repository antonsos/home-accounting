import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {EventService} from '../../../shared/services/event.service';
import {CategoryService} from '../../../shared/services/category.service';
import {EventModel} from '../../../shared/models/event.model';
import {CategoryModel} from '../../../shared/models/category.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private categoryService: CategoryService,
  ) { }

  sub1: Subscription;
  public isLoaded: boolean;
  public eventDetail: EventModel;
  public categoryDetail: CategoryModel;

  getEventClass(event: EventModel): string {
    return event.type === 'income' ? 'label-success' : 'label-danger';
  }

  ngOnInit() {
    this.route.params
      .mergeMap((params: Params) => this.eventService.getEvent(params['id']))
      .mergeMap((event: EventModel) => {
        this.eventDetail = event;
        return this.categoryService.getCategory(event['category']);
      })
      .subscribe((category: CategoryModel) => {
        this.categoryDetail = category;

        this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

}
