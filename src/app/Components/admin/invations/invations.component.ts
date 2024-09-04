import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminServicesService } from '../admin-services.service';

@Component({
  selector: 'app-invations',
  templateUrl: './invations.component.html',
  styleUrls: ['./invations.component.css']
})
export class InvationsComponent {


  AllInvention: any = []
  ngOnInit(): void {
    this.GetAllInventions()
  }

  constructor(private services: AdminServicesService, private messageService: MessageService, private spinner: NgxSpinnerService) { }


  GetAllInventions() {
    this.spinner.show();
    this.services.GetAllInvention().subscribe({
      next: (res: any) => {
        this.AllInvention = res.data
        this.spinner.hide();
      },
      error: (err: any) => {
        this.spinner.hide();
      }
    })
  }

  DeleteInvationsAdmin(id: any) {
    this.services.DeleteInvations(id).subscribe({
      next: (res: any) => {
        console.log(res)
        this.show()
        this.GetAllInventions()
      },
      error: (err: any) => {
        this.showError()
        console.log(err)
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


