import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.css']
})
export class BillCardComponent implements OnInit {

  constructor() { }
  @Input() usd: number;
  @Input() billValue: number;
  @Input() eur: number;

  ngOnInit() {
  }

}
