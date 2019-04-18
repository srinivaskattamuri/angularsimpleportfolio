import { Component, OnInit } from '@angular/core';
import { SkillsService } from './../services/skills.service';
import {IAbilities} from './../services/IAbilities';
import {ISkills} from './../services/ISkills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  age: number;
  
  currentAddress: string = "Chennai, Tamilnadu, India - 600097";
  _resumeUrl : IAbilities[]; 
  downloadResume : String;
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {

    var today: Date = new Date();
    var birthday: Date = new Date(1994, 8, 28);
    
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();
    
    this.age = Math.floor(differenceInMilisecond / 31536000000);

    this.skillsService.getResumeUrl().subscribe(
      resumeUrl => {
        this._resumeUrl = resumeUrl;
        this.downloadResume = this._resumeUrl["resume"].values;
      },
      error => console.log(error)
    );
  }

}
