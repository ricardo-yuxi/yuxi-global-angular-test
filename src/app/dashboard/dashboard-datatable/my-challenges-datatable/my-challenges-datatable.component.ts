import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { ChallengeService } from "../../challenge.service";

@Component({
  selector: 'my-challenges-datatable',
  templateUrl: './my-challenges-datatable.component.html',
  styleUrls: ['./my-challenges-datatable.component.css']
})
export class MyChallengesDatatableComponent implements OnInit {
  public rows: Array<any> = [];
  public temp: Array<any> = [];

  columns = [
    { prop: 'challengeName' },
    { prop: 'modifiedDate' },
    { prop: 'overallScore' },
    { prop: 'completedDate' },
  ];
  
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    private challengeService: ChallengeService
  ) { }

  ngOnInit() {
    this.getMyChallenges();
  }

  getMyChallenges() {
    this.challengeService.getMyChallenges()
      .subscribe(data => {
        // cache
        this.temp = [...data];
        // push our inital complete list
        this.rows = data;
        // this.getCreatedBy(data);
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.challengeName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getCreatedBy(data) {

  }
}
