import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcurementService {

  constructor(private http: HttpClient) { }

  getProcurements(){
    const headers = new HttpHeaders({ 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGFkcmFja0BqaXRlZ2VtZWVob2xkaW5ncy5jby50eiIsInJvbGVzIjpbIlVTRVIiLCJBRE1JTiJdLCJleHAiOjE2ODcxNzExMzMsImlhdCI6MTY4NzA4NDczM30.tlXNwvbJIV91rb0rxi0nlYcxVikTgTILafxZfB8yo4g' })
    return this.http.get('http://41.59.228.84:8081/api/procureTypes')
  }

  sendProcurements(service){
    const body = {
      "procureTypeName": service
    }
    return this.http.post('http://41.59.228.84:8081/api/procureTypes', body)
  }
}
