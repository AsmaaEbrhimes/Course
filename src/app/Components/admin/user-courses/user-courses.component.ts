import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminServicesService } from '../admin-services.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent {
  constructor(private services: AdminServicesService, private messageService: MessageService, private spinner: NgxSpinnerService) { }

  first: number = 1;
  rows: number = 10;
  coursesUser: any = ''
  visible = false
  ngOnInit(): void {
    this.GetAllUserCourse()
  }

  GetAllUserCourse() {
    this.spinner.show()
    this.services.GetAllUserCoursesAdmin(this.first, this.rows).subscribe({
      next: (res: any) => {
        this.spinner.hide()
        console.log(res.data)
        this.coursesUser = res.data
      },
      error: (err: any) => {
        this.spinner.hide()
      }
    })
  }
  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
    this.GetAllUserCourse();
  }

  showDialog(id: any) {
    alert(id)
    this.visible = true;
    this.services.GetOneCouresOnsAdmin(id).subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  hideDilog() {
    this.visible = false;
  }


  DeleteCoponAdmin(id: any) {

  }
}