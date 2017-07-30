import { ChallengeService } from './../challenge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {

  constructor(
    private challengeService: ChallengeService
  ) { }

  ngOnInit() {
  }

  getTeamChallenges() {
    this.challengeService.getTeamChallenges();
  }

}
