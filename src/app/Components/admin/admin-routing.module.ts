import { GetAllCourseComponent } from './get-all-course/get-all-course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { CoponAdmiComponent } from './copon-admi/copon-admi.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { WelletsAdmainComponent } from './wellets-admain/wellets-admain.component';
import { InvationsComponent } from './invations/invations.component';

const routes: Routes = [
  {path:"user",component:AllUserComponent},
  {path:"CorseUser",component:GetAllCourseComponent},
  {path:"coponAdmin",component:CoponAdmiComponent},
  {path:"courseUser",component:UserCoursesComponent},
  {path:"WellectAdmin",component:WelletsAdmainComponent},
  {path:"Invetions",component:InvationsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
