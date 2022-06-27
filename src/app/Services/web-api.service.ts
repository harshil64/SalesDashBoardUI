import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

  constructor(private http: HttpClient) { }

  login(logindetails: any) {
    let url = "https://localhost:44367/Login/AuthorLogin";
    let obs = this.http.post(url, logindetails);
    return obs;
  }
}
