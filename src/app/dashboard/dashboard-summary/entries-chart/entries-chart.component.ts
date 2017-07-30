import { Component, OnInit, ViewChild } from '@angular/core';
import { ChallengeService } from "../../challenge.service";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: 'entries-chart',
  templateUrl: './entries-chart.component.html',
  styleUrls: ['./entries-chart.component.css']
})
export class EntriesChartComponent implements OnInit {
  public teamChallenges = [];
  // Doughnut

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  public doughnutChartLabels:string[] = ['Number to Review', 'Number of Entries'];
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
        this.doughnutChartData.push(this.numberOfEntries(data));
        this.doughnutChartData.push(this.numberToReview(data));
        this.chart.chart.update();
      });
  }

  numberOfEntries(data) {
    let sum = data.reduce( (acc, item) => {
      return acc += +item.numberOfEntries;
    }, 0);
    console.log('Entries', sum);
    return sum;
  }

  numberToReview(data) {
    let sum = data.reduce( (acc, item) => {
      return acc += +item.numberToReview;
    }, 0);
    console.log('toReview', sum);
    return sum;
  }

}
