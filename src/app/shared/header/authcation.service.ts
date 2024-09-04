import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { envirionments } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthcationService {

  constructor(private http: HttpClient) { }



  Register(model:any){
    
    return this.http.post(envirionments.baseApi + "auth/register", model);
  }


  Login(model:any){
    return this.http.post(envirionments.baseApi + "auth/login", model);
  }


}
