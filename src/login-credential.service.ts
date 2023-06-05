import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginCredentialService {
  public getjsonValues: any;
  body= {
    empId:"shadrack@jitegemeeholdings.co.tz",
    paswd:"Mbwagha"
  }
  constructor(private http: HttpClient) {

   }

   readInfo(){
    return this.http.post('http://41.59.228.84:8081/api/login', this.body)
   }
}
