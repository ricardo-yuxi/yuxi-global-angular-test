import { Component, OnInit, ViewChild } from '@angular/core';
import { ChallengeService } from "../../challenge.service";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: 'entries-chart',
  templateUrl: './entries-chart.component.html',
  styleUrls: ['./entries-chart.component.scss']
})
export class EntriesChartComponent implements OnInit {
  public teamChallenges = [];
  public entriesToReview: number = 0;
  // Doughnut

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  public doughnutChartLabels:string[] = ['Entries number','Entries to Review'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
 

  constructor(
    private challengeService: ChallengeService
  ) { }

  ngOnInit() {
    this.getTeamChallenges();
    this.doughnutChartData = [0,0];
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
        let entries = this.numberOfEntries(data);
        this.entriesToReview = this.numberToReview(data)
        this.doughnutChartData = [entries, this.entriesToReview];
        this.chart.chart.update();
      });
  }

  numberOfEntries(data) {
    let sum = data.reduce( (acc, item) => {
      return acc += +item.numberOfEntries;
    }, 0);
    return sum;
  }

  numberToReview(data) {
    let sum = data.reduce( (acc, item) => {
      return acc += +item.numberToReview;
    }, 0);
    return sum;
  }

}
