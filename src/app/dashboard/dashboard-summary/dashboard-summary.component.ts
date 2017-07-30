import { ChallengeService } from './../challenge.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: 'dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {
  public teamChallenges = [];
  // Doughnut

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  public doughnutChartLabels:string[] = ['Number of entries'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
 

  constructor(
    private challengeService: ChallengeService
  ) { }

  ngOnInit() {
    this.getTeamChallenges();
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  getTeamChallenges() {
    this.challengeService.getTeamChallenges()
      .subscribe(data => {
        this.getTeamChallenges = data;
        this.doughnutChartData.push(this.calculateEntries(data));
        this.chart.chart.update();
      })
  }

  calculateEntries(data) {
    let sum = data.reduce( (acc, item) => {
      return acc += +item.numberOfEntries;
    }, 0);
    console.log('sum', sum);
    return sum;
  }

}
