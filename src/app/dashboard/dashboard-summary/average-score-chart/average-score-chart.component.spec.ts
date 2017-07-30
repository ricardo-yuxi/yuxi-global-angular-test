import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageScoreChartComponent } from './average-score-chart.component';

describe('AverageScoreChartComponent', () => {
  let component: AverageScoreChartComponent;
  let fixture: ComponentFixture<AverageScoreChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageScoreChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageScoreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
