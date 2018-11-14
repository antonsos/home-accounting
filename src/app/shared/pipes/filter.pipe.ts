import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterEvents'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: any, field: any): any {
    if (items.length === 0 && !value) {
      return items;
    }

    return items.filter(item => {
      const itemCopy = Object.assign({}, item);
      if (field === 'type') {
        itemCopy[field] = itemCopy[field] === 'income' ? 'доход' : 'расход';
      }
      if (field === 'category') {
        itemCopy[field] = itemCopy['catName'];
      }
      if (!isNaN(itemCopy[field])) {
        itemCopy[field] += '';
      }

      return itemCopy[field].toLowerCase().indexOf(value.toLocaleString()) !== -1;
    });
  }

}
