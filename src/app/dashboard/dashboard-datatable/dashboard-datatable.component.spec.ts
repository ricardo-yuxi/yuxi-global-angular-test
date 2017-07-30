import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDatatableComponent } from './dashboard-datatable.component';

describe('DashboardDatatableComponent', () => {
  let component: DashboardDatatableComponent;
  let fixture: ComponentFixture<DashboardDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
