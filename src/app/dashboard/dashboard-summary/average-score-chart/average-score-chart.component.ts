import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";
import { ChallengeService } from "../../challenge.service";

@Component({
  selector: 'average-score-chart',
  templateUrl: './average-score-chart.component.html',
  styleUrls: ['./average-score-chart.component.css']
})
export class AverageScoreChartComponent implements OnInit {
  public myChallenges = [];
  // Doughnut

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  public doughnutChartLabels:string[] = ['Average Score'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.getMyChallenges();
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  getMyChallenges() {
    this.challengeService.getMyChallenges()
      .subscribe(data => {
        this.myChallenges = data;
        this.doughnutChartData.push(this.calculateAverageScore(data));
        this.chart.chart.update();
      });
  }

  calculateAverageScore(data) {
    let sum = data.reduce( (acc, item) => {
      return acc += +item.overallScore;
    }, 0);
    let average = ( sum / data.length );
    console.log('average',average);
    return average;
  }
}
