import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";
import { ChallengeService } from "../../challenge.service";

@Component({
  selector: 'personal-chart',
  templateUrl: './personal-chart.component.html',
  styleUrls: ['./personal-chart.component.css']
})
export class PersonalChartComponent implements OnInit {
  public myChallenges = [];
  // Doughnut

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  public doughnutChartLabels:string[] = ['Challenges', 'To Complete'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.getMyChallenges();
    this.doughnutChartData = [0,0];
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
        let challenges = this.myChallenges.length;
        let to_complete = this.challengesCompleted(data);
        this.doughnutChartData = [challenges, to_complete];
        this.chart.chart.update();
      });
  }

  challengesCompleted(data) {
    let sum = 0;
    data.map(challenge => {
      if (challenge.completedDate === null) {
        sum++;
      }
    });
    return sum;
  }
}
