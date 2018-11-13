import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[dropdownEvent]'
})
export class DropdownDirective {
  constructor(public element: ElementRef) {}

  @HostListener('click') onClick() {
    this.element.nativeElement.classList.toggle('open');
  }
}
