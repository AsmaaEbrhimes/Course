import { PasswordModule } from 'primeng/password';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChartsDashboardComponent } from './charts-dashboard/charts-dashboard.component';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuModule } from 'primeng/menu';
import { FooterComponent } from './footer/footer.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    ChartsDashboardComponent,
    FooterComponent
  ],
  imports: [
    DropdownModule,
    MenuModule,
    PasswordModule,
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    DialogModule,
    SidebarModule,
    ToastModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ChartModule,
    InputNumberModule,
   
  ],
  exports:[
    HeaderComponent,
    SideBarComponent,
    ChartsDashboardComponent,
    FooterComponent
  ],
  providers:[
    MessageService
  ]
})
export class SharedModule { }
