import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { WebAPIService } from '../Services/web-api.service';
import { Router } from '@angular/router';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  auth_token: string;
  constructor(private webapi: WebAPIService, public router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth_token = this.webapi.getToken();
    const tokenized_request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`
      }
    });

    return next.handle(tokenized_request).pipe(
      catchError((error) => {
        console.log('error is intercept')
        console.error(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:      //login
                this.router.navigateByUrl("/login");
                break;
              case 403:     //forbidden
                this.router.navigateByUrl("/unauthorized");
                break;
            }
          }
        } else {
          console.error("some thing else happened");
        }
        return throwError(error.message);
      })
    )
  }
}
