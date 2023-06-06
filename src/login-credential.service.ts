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
    return this.http.get('http://localhost:3000/body')
   }
}
