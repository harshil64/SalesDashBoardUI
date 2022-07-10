import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

  private url = "https://localhost:44367/Login/AuthorLogin";
  constructor(private http: HttpClient) { }

  login(logindetails: any) {
    
    let obs = this.http.post(this.url, logindetails);
    return obs;
  }
}
