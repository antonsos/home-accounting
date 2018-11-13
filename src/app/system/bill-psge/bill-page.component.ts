import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../../shared/services/bill.service';
import {Observable, Subscription} from 'rxjs';
import {BillModel} from '../../shared/models/bill.model';

@Component({
  selector: 'app-build-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.css']
})
export class BillPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  public usd: number;
  public eur: number;
  public billValue: number;
  public isLoaded = false;
  public currency: any;
  public bill: BillModel;
  public date: string;

  constructor(
    private billService: BillService,
  ) { }

  ngOnInit() {
    this.refreshCurrency();
  }

  public refreshCurrency() {
    this.isLoaded = false;

    this.subscription = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency('EUR')
    ).delay(500)
      .subscribe((data: [any, any]) => {
        this.currency = data[1];
        this.bill = data[0];
        this.billValue = this.bill.value;
        this.date = this.currency.date;
        this.eur = this.currency.rates.RUB;
        this.usd = this.currency.rates.RUB / this.currency.rates.USD;

        this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
