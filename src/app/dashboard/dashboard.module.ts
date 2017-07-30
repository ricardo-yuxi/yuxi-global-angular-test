import { ChallengeService } from './challenge.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { SharedModule } from "../shared/shared.module";
import { DashboardDatatableComponent } from './dashboard-datatable/dashboard-datatable.component';
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule
  ],
  declarations: [DashboardSummaryComponent, DashboardDatatableComponent],
  exports: [
    DashboardSummaryComponent,
    DashboardDatatableComponent
  ],
  providers: [ChallengeService]
})
export class DashboardModule { }
