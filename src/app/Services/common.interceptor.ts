import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebAPIService } from '../Services/web-api.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  auth_token: string;
  constructor(private webapi: WebAPIService) {    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.auth_token = this.webapi.getToken();
    const tokenized_request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`
      }
    })
    return next.handle(tokenized_request);
  }
}
