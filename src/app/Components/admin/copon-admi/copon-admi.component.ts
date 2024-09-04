import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServicesService } from '../admin-services.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-copon-admi',
  templateUrl: './copon-admi.component.html',
  styleUrls: ['./copon-admi.component.css']
})
export class CoponAdmiComponent {
  ngOnInit(): void {
    this.GeAllCopon()
  }

  CoponAdmin: any = ''
  visible: boolean = false;
  _id: any = ''
  wallet: any = ''
  userName: any = ''
  role: any = ''
  phone: any = ''
  invitation: any = ''
  email: any = ''
  copone: any = ''
  first: number = 1;
  rows: number = 10;

  constructor(private services: AdminServicesService, private spinner: NgxSpinnerService , private messageService: MessageService) { }

  GeAllCopon() {
    this.spinner.show();
    this.services.GetAllCoponAdmin(this.first , this.rows).subscribe({
      next: (res: any) => {
        this.CoponAdmin = res.data
        this.spinner.hide();
      },
      error: (err: any) => {
        this.spinner.hide();
      }
    })

  }

  

  showDialog(id: any) {
    this.visible = true;
    this.services.GetOneCoponesAdmin(id).subscribe({
      next: (res: any) => {
        this._id = res.data._id
        this.copone = res.data.user.copone
        this.email = res.data.user.email
        this.phone = res.data.user.phone
        this.role = res.data.user.role
        this.userName = res.data.user.userName
        this.invitation = res.data.user.invitation
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  
  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
    this.GeAllCopon();
  }

  hideDilog() {
    this.visible = false;
  }


  DeleteCoponAdmin(copon: any) {
    this.services.DeleteCoponesAdmin(copon).subscribe({
      next: (res: any) => {
        console.log(res)
        this.GeAllCopon()
        this.show()
      },
      error: (err: any) => {
       this.showError()
      }
    })
  }


  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
}
