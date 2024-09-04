import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminServicesService } from '../admin-services.service';
@Component({
  selector: 'app-wellets-admain',
  templateUrl: './wellets-admain.component.html',
  styleUrls: ['./wellets-admain.component.css']
})
export class WelletsAdmainComponent {

  AllWellect:any=[]
  ngOnInit(): void {
    this.GetAllWellects()
  }

  constructor(private services: AdminServicesService, private messageService: MessageService, private spinner: NgxSpinnerService) { }



  GetAllWellects() {
    this.spinner.show();
    this.services.GetAllWellectAdmin().subscribe({
      next: (res: any) => {
        this.spinner.hide();
        this.AllWellect=res.data
      },
      error: (err: any) => {
        this.spinner.hide();
      }
    })
  }

  //wallet  userName  status  role  phone  invitation  email  createdAt  copone  city

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

}
