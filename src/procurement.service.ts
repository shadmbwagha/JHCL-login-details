import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcurementService {

  constructor(private http: HttpClient) { }

  getProcurements(){
    const headers = new HttpHeaders({ 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGFkcmFja0BqaXRlZ2VtZWVob2xkaW5ncy5jby50eiIsInJvbGVzIjpbIkFETUlOIl0sImV4cCI6MTY5MjY4MzA5MiwiaWF0IjoxNjkyNTk2NjkyfQ.HrX4aobsH6JT809Hi3LAq2C5BQR13wNEGGfktNqTP7s' })
    return this.http.get('http://41.59.228.84:8081/api/procureTypes')
  }

  sendProcurements(service){
    const body = {
      "procureTypeName": service
    }
    return this.http.post('http://41.59.228.84:8081/api/procureTypes', body)
  }
}
