import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { HomeRoutingModule } from './home-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { AboutUsComponent } from './about-us/about-us.component';
import { PriceComponent } from './price/price.component';
import { AnswersComponent } from './answers/answers.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CoursesComponent } from './courses/courses.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    PriceComponent,
    AnswersComponent,
    ContactComponent,
    CoursesComponent,
    PrivacyComponent
  ],
  imports: [
    ScrollTopModule,
    AccordionModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SharedModule,
    ButtonModule,
    InputTextModule

  ]
})
export class HomeModule { }
