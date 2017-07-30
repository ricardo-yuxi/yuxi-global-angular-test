import { ChallengeService } from './../../challenge.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: 'team-challenges-datatable',
  templateUrl: './team-challenges-datatable.component.html',
  styleUrls: ['./team-challenges-datatable.component.css']
})
export class TeamChallengesDatatableComponent implements OnInit {
  public rows = [];

  columns = [
    { prop: 'name' },
    { prop: 'userFullName' },
    { prop: 'numberInvited' },
    { prop: 'modifiedDate' },
    { prop: 'numberOfEntries' },
    { prop: 'numberToReview' },
  ];
  
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    private challengeService: ChallengeService
  ) { }

  ngOnInit() {
    this.getTeamChallenges();
  }

  getTeamChallenges() {
    this.challengeService.getTeamChallenges()
      .subscribe(data => {
        this.rows = data;
      });
  }

}
