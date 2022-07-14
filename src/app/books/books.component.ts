import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BooksModel } from '../Models/BookModel';
import { WebAPIService } from '../Services/web-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  host: {
    class: 'classToFixDisplayIssue'
  }
})
export class BooksComponent implements OnInit {

  mybooks: Array<BooksModel>;

  constructor(private webapi: WebAPIService, private sanitizer: DomSanitizer) {
    let getMyBooksCall = this.webapi.getMyBooks();
    getMyBooksCall.subscribe((data: any) => {
      this.mybooks = data.result;
    })
  }

  ngOnInit(): void {
  }

  getImage(img: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

}
