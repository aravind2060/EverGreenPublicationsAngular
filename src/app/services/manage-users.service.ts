import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  url:string="http://localhost:8083";
  constructor(private http:HttpClient) { }


  getAllUsers():Observable<any>
  {
    return this.http.get(this.url+"/admin/getallusers/100")
  }
 
  getAllCustomers(adminEmail:string,adminPassword:string,adminId:number,pageNumber:number)
  {
     return this.http.get(this.url+"/admin/customers/"+adminEmail+"/"+adminPassword+"/"+adminId+"/"+pageNumber);
  }
  
}
