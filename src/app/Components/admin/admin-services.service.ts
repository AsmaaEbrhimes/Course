import { Injectable } from '@angular/core';
import { envirionments } from 'environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  constructor(private http: HttpClient) { }

  GetAllUser(){
    return this.http.get(envirionments.baseApi + "admin/users");
  }

  DeleteUer(id:any){
    return this.http.delete(envirionments.baseApi + `admin/user/${id}`);
  }

  GetOneUser(id:any){
    return this.http.get(envirionments.baseApi + `admin/user/${id}`);
  }

  uPDateUserAdmin(id:any , model:any){
    return this.http.put(envirionments.baseApi + `admin/user/${id}`, model)
  }



  
  GetCoursesAdmin(limit:any , page:any){
    return this.http.get(envirionments.baseApi + `admin/courses?limit=${limit}&page=${page}`);
  }

  CreatCourseAdmin(model:any){
    return this.http.post(envirionments.baseApi + `admin/course/create`, model);
  }

  DeleteCourseAdmin(id: any) {
    const url = `${envirionments.baseApi}admin/course/${id}`;
    return this.http.delete(url);
  }


  GetAllCoponAdmin(first:any , rows:any){
    return this.http.get(envirionments.baseApi + `admin/copones?limit=${rows}&page=${first}&copone=4f4f7e95-2581-45f9-8026-b2136f9c9534`);
  }


  GetOneCoponesAdmin(id:any){
    return this.http.get(envirionments.baseApi + `admin/copone/${id}`);
  }

 DeleteCoponesAdmin(copon:any){
    return this.http.delete(envirionments.baseApi + `admin/copone/${copon}`);
  }


  GetAllUserCoursesAdmin(first:any , rows:any){
   return this.http.get(envirionments.baseApi + `admin/usercourses?limit=1&page=1`)
  }


  UpDateCoursesAdmin(id:any , model:any){
    return this.http.put(envirionments.baseApi + `admin/course/${id}`, model)
  }

  GetOneCouresOnsAdmin(id:any){
    return this.http.get(envirionments.baseApi + `admin/usercourse/${id}`)
   }
 


   GetAllWellectAdmin(){
    return this.http.get(envirionments.baseApi + `admin/wallets`)
   }



   GetAllInvention(){
    return this.http.get(envirionments.baseApi + `admin/invitations`)
   }
   

   DeleteInvations(id:any){
    return this.http.delete(envirionments.baseApi + `admin/invitation/${id}`)

   }
}
