import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {
    class:'classToFixDisplayIssue'
}
})
export class DashboardComponent implements OnInit {

  private token: any;

  constructor(private router: Router) { 
    if (sessionStorage.getItem('result') == null) {
      this.router.navigateByUrl('/login')
    }
    else {
      let result = JSON.parse(sessionStorage.getItem('result') || '{}');
      this.token = result.token;
      console.log(this.token);
    }
  }

  ngOnInit(): void {
  }

}
