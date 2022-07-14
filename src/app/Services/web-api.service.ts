import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

  private base_url = "http://localhost:8009/";
  private UserLogin_url = "Login/AuthorLogin";
  private Dashboard_url = "Dashboard/DashboardDetails";
  private Book_url = "Books/GetMyBooks";

  constructor(private http: HttpClient) { }

  getToken() {
    let result = JSON.parse(sessionStorage.getItem('result') || '{}');
    return result.token;
  }

  login(logindetails: any) {
    let obs = this.http.post(this.base_url + this.UserLogin_url, logindetails);
    return obs;
  }

  getDashboard() {
    let obs = this.http.get(this.base_url + this.Dashboard_url);
    return obs;
  }

  getMyBooks() {
    let obs = this.http.get(this.base_url + this.Book_url);
    return obs;
  }
}
