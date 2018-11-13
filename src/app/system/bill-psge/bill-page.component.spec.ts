import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPsgeComponent } from './bill-page.component';

describe('BillPsgeComponent', () => {
  let component: BillPsgeComponent;
  let fixture: ComponentFixture<BillPsgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPsgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPsgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
