import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  auth = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGFkcmFja0BqaXRlZ2VtZWVob2xkaW5ncy5jby50eiIsInJvbGVzIjpbIlVTRVIiLCJBRE1JTiJdLCJleHAiOjE2ODcyNTE1NjksImlhdCI6MTY4NzE2NTE2OX0.nsesNq5Cz1x-RPrUFIqR8t91S0Or2y5yjQtVS4dvgc8'
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth}`
      }
    });

    return next.handle(request);
  }
}
