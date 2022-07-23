import { SafeCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesModel } from '../Models/SalesModel';
import { WebAPIService } from '../Services/web-api.service';

@Component({
  selector: 'app-booksales',
  templateUrl: './booksales.component.html',
  styleUrls: ['./booksales.component.css'],
  host: {
    class: 'classToFixDisplayIssue'
  }
})
export class BooksalesComponent implements OnInit {

  allSales: Array<SalesModel>;

  constructor(private route: ActivatedRoute, private webapi: WebAPIService) {

    let getMyBooksCall = this.webapi.getAllSalesForAuthor();
    getMyBooksCall.subscribe((data: any) => {
      this.allSales = data.result;
      console.log(this.allSales);
    })
  }

  ngOnInit(): void {
  }

}
