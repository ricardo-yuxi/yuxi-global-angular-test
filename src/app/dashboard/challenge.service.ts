import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChallengeService {
  private teamChallengesUrl = 'https://raw.githubusercontent.com/H4isan/custom_libs/master/TeamChallenges.json';
  private getMyChallengesUrl = 'https://raw.githubusercontent.com/H4isan/custom_libs/master/MyChallenges.json';

  constructor(
    private http: Http
  ) { }

  getTeamChallenges() {
    return this.http
      .get(this.teamChallengesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMyChallenges() {
    return this.http
      .get(this.getMyChallengesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): object {
    let body = res.json().results;
    return body || {};
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}
