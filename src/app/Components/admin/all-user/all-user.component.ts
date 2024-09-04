import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServicesService } from '../admin-services.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent {
  data: any = ''
  loading: boolean = false;
  visible: boolean = false;
  EmailUser: any = ''
  phoneUser: any = ""
  passworduser: any = ''
  iduser: any = ''
  visibleld = false
  usrData: any = {};
  IdUser: any = ''

  form!: FormGroup
  ngOnInit() {
    this.GetAllUser()
    this.CreateForm()
  }
  constructor(private services: AdminServicesService, private spinner: NgxSpinnerService, private fb: FormBuilder, private messageService: MessageService) { }

  GetAllUser() {
    this.spinner.show();
    this.services.GetAllUser().subscribe({
      next: (res: any) => {
        this.data = res.data
        this.spinner.hide();
      }
    })
  }


  CreateForm() {
    this.form = this.fb.group({
      email: [''],
      userName: [''],
      city: ['']
    })
  }

  UpdateUser(user: any) {
    this.IdUser = user._id
    this.usrData = user
    this.visibleld = true;
    this.patchFormValues();
  }

  patchFormValues() {
    if (this.usrData) {
      this.form.patchValue({
        email: this.usrData.email,
        userName: this.usrData.userName,
        city: this.usrData.city || ''
      });
    }
  }



  submitUpdate() {
    console.log("forms", this.form.value)
    const model = this.form.value
    this.services.uPDateUserAdmin(this.IdUser, model).subscribe({
      next: (res: any) => {
        console.log(res)
         this.visibleld = false;
        this.GetAllUser()
        this.show()
      },
      error: (err: any) => {
        console.log(err)
        this.showError()
      }
    })
  }




  onPageChange(event: any) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  DeleteUser(id: any) {
    this.services.DeleteUer('66c7cd71e17bd62daff12a2e').subscribe({
      next: (res: any) => {
        console.log(res)
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }

  showDialog(id: any) {
    this.visible = true;
    this.services.GetOneUser(id).subscribe({
      next: (res: any) => {
        this.EmailUser = res.data.email
        this.passworduser = res.data.password
        this.iduser = res.data._id
        console.log(res.data)
      }
    })
  }
  hideDilog() {
    this.visible = false;
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
}
