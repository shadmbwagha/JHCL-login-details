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

  auth = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGFkcmFja0BqaXRlZ2VtZWVob2xkaW5ncy5jby50eiIsInJvbGVzIjpbIlVTRVIiLCJBRE1JTiJdLCJleHAiOjE2ODc1NDQxNjgsImlhdCI6MTY4NzQ1Nzc2OH0.0p5PXWgqvKzkWMYaMLc5EPsWqPAUnxMjR935mc4dD10'
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth}`
      }
    });

    return next.handle(request);
  }
}
