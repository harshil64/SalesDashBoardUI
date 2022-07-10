import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Name: string;
  Role: string;
  Admin: boolean;

  constructor(private router: Router) { 
    if (sessionStorage.getItem('result') == null) {
      this.router.navigateByUrl('/login')
    }
    else {
      let result = JSON.parse(sessionStorage.getItem('result') || '{}');
      this.Name = result.loggedInUser.name;
      this.Role = result.loggedInUser.role;

      if(this.Role=="Author"){
        this.Admin = false;
      }
    }
  }

  ngOnInit(): void {
  }

}
