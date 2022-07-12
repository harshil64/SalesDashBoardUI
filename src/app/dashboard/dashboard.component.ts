import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardModel } from '../Models/DashboardModel';
import { WebAPIService } from '../Services/web-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {
    class: 'classToFixDisplayIssue'
  }
})
export class DashboardComponent implements OnInit {

  dashboarddata: DashboardModel;
  private token: any;

  constructor(private router: Router, private webapi: WebAPIService) {
    if (sessionStorage.getItem('result') == null) {
      this.router.navigateByUrl('/login')
    }
    else {
      let dashboardCall = this.webapi.getDashboard();
      dashboardCall.subscribe((data: any) => {
        if (data.statusCode == 400) {
          console.log(data.validation[0].title);
        }
        else {
          this.dashboarddata = data.result;
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
