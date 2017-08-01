import { Component, OnInit } from '@angular/core';
import { ChallengeService } from "../challenge.service";

@Component({
  selector: 'dashboard-datatable',
  templateUrl: './dashboard-datatable.component.html',
  styleUrls: ['./dashboard-datatable.component.css']
})
export class DashboardDatatableComponent implements OnInit {
  public challengesToComplete: number = 0;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.getMyChallenges();
  }

  getMyChallenges() {
    this.challengeService.getMyChallenges()
      .subscribe(data => {
        this.challengesToComplete = this.challengesCompleted(data);
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
