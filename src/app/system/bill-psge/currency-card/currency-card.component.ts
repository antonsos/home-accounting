import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent implements OnInit {

  constructor() { }

  @Input() usd: number;
  @Input() date: string;
  @Input() eur: number;

  ngOnInit() {
  }

}
