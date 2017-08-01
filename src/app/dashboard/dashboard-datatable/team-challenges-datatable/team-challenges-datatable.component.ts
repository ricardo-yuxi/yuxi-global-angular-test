import { ChallengeService } from './../../challenge.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: 'team-challenges-datatable',
  templateUrl: './team-challenges-datatable.component.html',
  styleUrls: ['./team-challenges-datatable.component.css']
})
export class TeamChallengesDatatableComponent implements OnInit {
  public rows: Array<any> = [];
  public temp: Array<any> = [];

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
        // cache
        this.temp = [...data];
        // push our inital complete list
        this.rows = data;
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getCellClass({ row, column, value }): any {
    return {
      'to-review': value > 0
    };
  }

}
