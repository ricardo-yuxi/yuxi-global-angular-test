import { ChallengeService } from './challenge.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { SharedModule } from "../shared/shared.module";
import { DashboardDatatableComponent } from './dashboard-datatable/dashboard-datatable.component';
import { HttpModule } from "@angular/http";
import { AverageScoreChartComponent } from './dashboard-summary/average-score-chart/average-score-chart.component';
import { EntriesChartComponent } from './dashboard-summary/entries-chart/entries-chart.component';
import { TeamChallengesDatatableComponent } from './dashboard-datatable/team-challenges-datatable/team-challenges-datatable.component';
import { MyChallengesDatatableComponent } from './dashboard-datatable/my-challenges-datatable/my-challenges-datatable.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule
  ],
  declarations: [DashboardSummaryComponent,
    DashboardDatatableComponent,
    AverageScoreChartComponent,
    EntriesChartComponent,
    TeamChallengesDatatableComponent,
    MyChallengesDatatableComponent
  ],
  exports: [
    DashboardSummaryComponent,
    DashboardDatatableComponent,
    AverageScoreChartComponent,
    EntriesChartComponent
  ],
  providers: [ChallengeService]
})
export class DashboardModule { }
