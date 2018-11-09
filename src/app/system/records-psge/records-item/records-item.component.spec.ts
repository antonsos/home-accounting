import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsItemComponent } from './records-item.component';

describe('RecordsItemComponent', () => {
  let component: RecordsItemComponent;
  let fixture: ComponentFixture<RecordsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
