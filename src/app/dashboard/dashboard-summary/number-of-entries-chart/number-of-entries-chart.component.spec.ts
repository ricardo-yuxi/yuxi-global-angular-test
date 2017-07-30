import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfEntriesChartComponent } from './number-of-entries-chart.component';

describe('NumberOfEntriesChartComponent', () => {
  let component: NumberOfEntriesChartComponent;
  let fixture: ComponentFixture<NumberOfEntriesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOfEntriesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfEntriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
