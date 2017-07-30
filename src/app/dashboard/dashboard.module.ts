import { ChallengeService } from './challenge.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { SharedModule } from "../shared/shared.module";
import { DashboardDatatableComponent } from './dashboard-datatable/dashboard-datatable.component';
import { HttpModule } from "@angular/http";
import { AverageScoreChartComponent } from './dashboard-summary/average-score-chart/average-score-chart.component';
import { NumberOfEntriesChartComponent } from './dashboard-summary/number-of-entries-chart/number-of-entries-chart.component';
import { TeamChallengesDatatableComponent } from './dashboard-datatable/team-challenges-datatable/team-challenges-datatable.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule
  ],
  declarations: [DashboardSummaryComponent,
    DashboardDatatableComponent,
    AverageScoreChartComponent,
    NumberOfEntriesChartComponent,
    TeamChallengesDatatableComponent
  ],
  exports: [
    DashboardSummaryComponent,
    DashboardDatatableComponent,
    AverageScoreChartComponent,
    NumberOfEntriesChartComponent
  ],
  providers: [ChallengeService]
})
export class DashboardModule { }
