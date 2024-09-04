import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PriceComponent } from './price/price.component';
import { AnswersComponent } from './answers/answers.component';
import { CoursesComponent } from './courses/courses.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'price',component:PriceComponent},
  {path:'answer',component:AnswersComponent},
  {path:'contact',component:ContactComponent},
  {path:'course',component:CoursesComponent},
  {path:'privacy',component:PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
