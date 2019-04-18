import { Component, OnInit } from '@angular/core';
import { SkillsService } from './../services/skills.service';
import {IAbilities} from './../services/IAbilities';
import {ISkills} from './../services/ISkills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  _skills : IAbilities[]; 

  constructor(private skillsService: SkillsService) {
    
  }

  ngOnInit() {
    this.skillsService.getSkills().subscribe(
      skills => {
        this._skills = skills;
      },
      error => console.log(error)
    );   
  }
 
  getAbilities(position: Number, value: any) {
    if (typeof this._skills !== 'undefined') {
        let  valArray : String[] = this._skills[value].values.split("|");
        let _skillsResult : ISkills;
        let _finalResult : ISkills[] = [];
        let len : number = valArray.length;
        for(let val of valArray) {
          let starRateArray : String[] = val.split("*");
          _skillsResult = new ISkills();
          _skillsResult.name = starRateArray[0];
          _skillsResult.rating = Number(starRateArray[1]);
          _finalResult.push(_skillsResult);
        }
        if(position == 1) {
          return _finalResult.slice(0,Math.round(len/2));
        } else {
          return _finalResult.slice(Math.round(len/2),len);
        }  
    }
  }

}
