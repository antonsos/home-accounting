import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPsgeComponent } from './history-psge.component';

describe('HistoryPsgeComponent', () => {
  let component: HistoryPsgeComponent;
  let fixture: ComponentFixture<HistoryPsgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPsgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPsgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
