import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MaxLengthValidator } from '@angular/forms';
import { AuthcationService } from './authcation.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  visible: boolean = false;
  login: boolean = false
  register: boolean = true
  countryCode = '+2';
  items: any[] | undefined;
  sidebarVisible: boolean = false;
  drop: any[] | undefined;

  constructor(private fb: FormBuilder, private services: AuthcationService, private messageService: MessageService) {
  }
  ngOnInit() {
    this.CreateFormRegister()
    this.CreateFormLogin()

  }




  formRegister!: FormGroup;
  formLogin!: FormGroup
  Success: boolean = false
  errors: boolean = false
  descErorr = ''
  isRegistered = false;
  islogin = false

  CreateFormRegister() {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(9)]],
      userName: ['', [Validators.required]]
    })
  }

  CreateFormLogin() {
    this.formLogin = this.fb.group({
      password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(13)]],
    })
  }


  showDialog() {
    this.visible = true;
  }

  ShowRegister() {
    this.register = true
    this.login = false
    this.isRegistered = true
    this.islogin = false

  }

  ShowLogin() {
    this.register = false
    this.login = true
    this.islogin = true
    this.isRegistered = false
  }


  CreateAccount(e: any) {
    e.preventDefault();
    this.services.Register(this.formRegister.value).subscribe({
      next: (res: any) => {
        this.show()
        this.formRegister.reset()
        setTimeout(() => {
          this.visible = false;
        }, 4000);
      },
      error: (err: any) => {
        this.showError()
        setTimeout(() => {
        }, 3000);
      }
    })
  }

  LoginAccount(e: any) {
    e.preventDefault();
    if (this.formLogin.valid) {
      const phone = this.formLogin.get('phone')?.value;
      const formattedPhone = this.countryCode + phone;
      this.formLogin.patchValue({
        phone: formattedPhone
      });
      const formData = this.formLogin.value;
      this.services.Login(formData).subscribe({
        next: (res: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
          this.formLogin.value.reset()
          setTimeout(() => {
            this.Success = false
            this.visible = false;
          }, 4000);
          localStorage.setItem('token', res.token)
        },
        error: (err: any) => {
          this.showError()
        }
      })
    }
  }









  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
}
