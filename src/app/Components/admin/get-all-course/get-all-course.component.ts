import { PriceComponent } from './../../home/price/price.component';



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServicesService } from '../admin-services.service';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-get-all-course',
  templateUrl: './get-all-course.component.html',
  styleUrls: ['./get-all-course.component.css']
})
export class GetAllCourseComponent implements OnInit {

  courses: any = [];
  UpdateData: any = {}
  IdUbdate: any = ''
  first: number = 1;
  rows: number = 10;
  visible: boolean = false;
  visibleld: boolean = false
  visibleldUser: boolean = false
  formCreate!: FormGroup;
  formUpdate!: FormGroup

  price:any=""
  discount:any=''
  description:any=''
  category:any=''



  constructor(private services: AdminServicesService, private fb: FormBuilder, private messageService: MessageService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.GetAllCourses();
    this.FormCreate();
    this.FormUpdate()
  }

  GetAllCourses() {
    this.spinner.show();
    this.services.GetCoursesAdmin(this.rows, this.first).subscribe({
      next: (res: any) => {
        this.spinner.hide();
        this.courses = res.data;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  showDialog(id: any) {
    this.visibleldUser = true
    this.price=id.price
    this.discount=id.discount
    this.description=id.description
    this.category=id.category

  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.GetAllCourses();
  }

  PopUpCreate() {
    this.visible = true;
  }

  FormCreate() {
    this.formCreate = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      level: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      category: ['', [Validators.required]],
      views: ['', [Validators.required]],
      video: ['', [Validators.required]],
      startAt: ['', [Validators.required]],
      endAt: ['', [Validators.required]],
    });
  }


  FormUpdate() {
    this.formUpdate = this.fb.group({
      title: [''],
      category: ['']
    })
  }


  CreateCourses() {
    this.spinner.show();
    const startDate: Date = this.formCreate.value.startAt;
    const endDate: Date = this.formCreate.value.endAt;
    const startAtISOString = startDate.toISOString();
    const endAtISOString = endDate.toISOString();

    this.services.CreatCourseAdmin(this.formCreate.value).subscribe({
      next: (res: any) => {
        this.show()
        this.visible = false
        this.formCreate.reset();
        this.spinner.hide();

      },
      error: (err: any) => {
        this.showError()
        this.spinner.hide();
      }
    })
  }

  DeleteCoursesAdmin(id: any) {
    this.services.DeleteCourseAdmin(id).subscribe({
      next: (res: any) => {
        this.GetAllCourses()
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  UpdateUser(data: any) {
    this.IdUbdate = data._id
    this.visibleld = true
    this.UpdateData = data
    this.patchFormValues()
  }

  patchFormValues() {
    if (this.UpdateData) {
      this.formUpdate.patchValue({
        title: this.UpdateData.title,
        category: this.UpdateData.category,
      });
    }
  }



  submitUpdate() {
    this.services.UpDateCoursesAdmin(this.IdUbdate, this.formUpdate.value).subscribe({
      next: (res: any) => {
        console.log(res)
        this.show()
        this.GetAllCourses()
        this.visibleld = false

      },
      error: (err: any) => {
        this.showError()
      }
    })
  }



  hideDilog(){
    this.visibleldUser=false
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
}
























