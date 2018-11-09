import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningPsgeComponent } from './planning-psge.component';

describe('PlanningPsgeComponent', () => {
  let component: PlanningPsgeComponent;
  let fixture: ComponentFixture<PlanningPsgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningPsgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningPsgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
