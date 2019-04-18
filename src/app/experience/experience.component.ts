import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../services/utils.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any;
  constructor(private utilsservice: UtilsService) { }

  ngOnInit() {
    var dateDiff = this.utilsservice.dateDiff("2015-06-30");
    this.experience = dateDiff.years + " Years "+ dateDiff.months+ " Months " + dateDiff.days + " Days";
  }

}
