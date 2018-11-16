import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CategoryModel} from '../../../shared/models/category.model';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.css']
})
export class HistoryFilterComponent {

  constructor() { }

  @Output() closeFilterOn = new EventEmitter<any>();
  @Output() applyFilterOn = new EventEmitter<any>();
  @Input() categories: CategoryModel[] = [];

  selectedPeriod = 'd';
  selectedTypes = [];
  selectedCategories = [];

  timePeriods = [
    {type: 'd', label: 'День'},
    {type: 'w', label: 'Неделя'},
    {type: 'M', label: 'Месяц'},
  ];

  typesRadio = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'},
  ];

  private calculateChange(checked: boolean, value: string, selectedArray: string[]) {
    if (checked) {
      if (selectedArray.indexOf(value) === -1) { selectedArray.push(value); }
    } else {
      const index = selectedArray.findIndex(item => item === value);
      selectedArray.splice(index, 1);
    }
  }

  changeType = ({checked, value}) => {
    this.calculateChange(checked, value, this.selectedTypes);
  }

  changeCategories({checked, value}) {
    this.calculateChange(checked, value, this.selectedCategories);
  }

  closeFilter() {
    this.selectedTypes = [];
    this.selectedPeriod = 'd';
    this.selectedCategories = [];
    this.closeFilterOn.emit();
  }

  applyFilter() {
    this.applyFilterOn.emit({
      types: this.selectedTypes,
      period: this.selectedPeriod,
      categories: this.selectedCategories,
    });
    this.selectedTypes = [];
    this.selectedPeriod = 'd';
    this.selectedCategories = [];
  }

}
