import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoyaltyTransactions } from '../Models/RoyaltyTransactions';
import { WebAPIService } from '../Services/web-api.service';

@Component({
  selector: 'app-royalty-payments',
  templateUrl: './royalty-payments.component.html',
  styleUrls: ['./royalty-payments.component.css'],
  host: {
    class: 'classToFixDisplayIssue'
  }
})
export class RoyaltyPaymentsComponent implements OnInit {

  RoyaltyPaymentsTransactions : RoyaltyTransactions;
  constructor(private route: ActivatedRoute, private webapi: WebAPIService) {

    let getMyBooksCall = this.webapi.GetRoyaltyTransactionsForAuthor();
    getMyBooksCall.subscribe((data: any) => {
      this.RoyaltyPaymentsTransactions = data.result;
      console.log(this.RoyaltyPaymentsTransactions);
    })
  }

  ngOnInit(): void {
  }

}
