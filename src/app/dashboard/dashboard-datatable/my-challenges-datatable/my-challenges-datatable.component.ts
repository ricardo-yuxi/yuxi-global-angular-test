import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { ChallengeService } from "../../challenge.service";

@Component({
  selector: 'my-challenges-datatable',
  templateUrl: './my-challenges-datatable.component.html',
  styleUrls: ['./my-challenges-datatable.component.css']
})
export class MyChallengesDatatableComponent implements OnInit {
  public rows: Array<any>;
  public rows2: Array<any>;
  public temp: Array<any>;

  columns = [
    { prop: 'challengeName' },
    { prop: 'challengerFirstName' },
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
        this.rows = data;
        this.rows2 = data;
        // this.getCreatedBy(data);
      });
  }

  updateFilter(event) {
    this.temp = []
    const val = event.target.value.toLowerCase();

    // filter our data
    this.temp = this.rows2.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = this.temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getCreatedBy(data) {

  }
}
