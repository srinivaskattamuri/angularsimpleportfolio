import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { UtilsService } from './services/utils.service';
import { SkillsService } from './services/skills.service';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path:'', component: AboutComponent},
  {path:'education', component: EducationComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'skills', component: SkillsComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'achievements', component: AchievementsComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    GalleryComponent,
    SkillsComponent,
    AchievementsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UtilsService,SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
