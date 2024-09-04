import { SharedModule } from './../../shared/shared.module';
import { AdminServicesService } from './admin-services.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AllUserComponent } from './all-user/all-user.component';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GetAllCourseComponent } from './get-all-course/get-all-course.component';
import { FileUploadModule } from 'primeng/fileupload';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { CoponAdmiComponent } from './copon-admi/copon-admi.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { WelletsAdmainComponent } from './wellets-admain/wellets-admain.component';
import { InvationsComponent } from './invations/invations.component';

@NgModule({
  declarations: [
    AllUserComponent,
    GetAllCourseComponent,
    CoponAdmiComponent,
    UserCoursesComponent,
    WelletsAdmainComponent,
    InvationsComponent

  ],
  imports: [
    CalendarModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    CommonModule,
    AdminRoutingModule,
    FileUploadModule,
    SharedModule,
    ChartModule,
    TableModule,
    PaginatorModule,
    ReactiveFormsModule
  ], 
  providers:[
    MessageService
  ]
})
export class AdminModule { }
