import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ChallengeService {
  private teamChallengesUrl = 'TeamChallenges.json';

  constructor(
    private http: Http
  ) { }

  getTeamChallenges() {
    return this.http
      .get(this.teamChallengesUrl);
  }

}
