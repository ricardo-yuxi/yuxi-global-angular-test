import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { SharedModule } from "../shared/shared.module";
import { DashboardDatatableComponent } from './dashboard-datatable/dashboard-datatable.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [DashboardSummaryComponent, DashboardDatatableComponent],
  exports: [
    DashboardSummaryComponent,
    DashboardDatatableComponent
  ]
})
export class DashboardModule { }
