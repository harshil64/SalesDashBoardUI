import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  host: {
    class: 'classToFixDisplayIssue'
  }
})
export class BookDetailsComponent implements OnInit {
  myParam: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.myParam = params.id;
      console.log(this.myParam);
    });
  }

}
