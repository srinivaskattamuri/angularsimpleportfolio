import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IAbilities} from './IAbilities';

@Injectable()
export class SkillsService {

  constructor(private http : HttpClient) { }

  getSkills() : Observable<any>{
    return this.http.get<IAbilities>('https://hari-angular-proofile.firebaseio.com/skills.json');
  }

  getResumeUrl() : Observable<any> {
    return this.http.get<IAbilities>('https://hari-angular-proofile.firebaseio.com/URL.json');
  }

}
