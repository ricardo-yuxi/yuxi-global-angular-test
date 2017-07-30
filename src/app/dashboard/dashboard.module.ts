import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [DashboardSummaryComponent],
  exports: [DashboardSummaryComponent]
})
export class DashboardModule { }
