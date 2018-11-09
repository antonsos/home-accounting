import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsPsgeComponent } from './records-psge.component';

describe('RecordsPsgeComponent', () => {
  let component: RecordsPsgeComponent;
  let fixture: ComponentFixture<RecordsPsgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsPsgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsPsgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
