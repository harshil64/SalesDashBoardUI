import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

  private base_url = "http://localhost:8009/";
  private UserLogin_url = "Login/AuthorLogin";
  private Dashboard_url = "Dashboard/DashboardDetails";
  private Books_url = "Books/GetMyBooks";
  private BookDetails_url = "Books/GetBookDetails";
  private BookSales_url = "Sales/GetAllSalesForAuthor";
  private RoyaltyTransactions_url = "Royalty/GetRoyaltyTransactionsForAuthor";
  private Profile_url = "Author/AuthorDetails";

  constructor(private http: HttpClient) { }

  getToken() {
    let result = JSON.parse(sessionStorage.getItem('result') || '{}');
    return result.token;
  }

  login(logindetails: any) {
    return this.http.get("./assets/API Responses/Login_AuthorLogin.json");
  }

  getDashboard() {
    return this.http.get("./assets/API Responses/Dashboard_DashboardDetails.json");
  }

  getMyBooks() {
    return this.http.get("./assets/API Responses/Books_GetMyBooks.json");
  }

  getBookDetails(BookId: any) {
    return this.http.get("./assets/API Responses/Books_GetBookDetails_bookid_4.json");
  }

  getAllSalesForAuthor() {
    return this.http.get("./assets/API Responses/Sales_GetAllSalesForAuthor.json");
  }

  GetRoyaltyTransactionsForAuthor() {
    return this.http.get("./assets/API Responses/Royalty_GetRoyaltyTransactionsForAuthor.json");
  }

  GetAuthorProfile(){
    return this.http.get("./assets/API Responses/AuthorProfile.json");
  }
}
