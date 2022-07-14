import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Name: string;
  Role: string;
  Admin: boolean = false;
  ImageSRC: string;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    if (sessionStorage.getItem('result') == null) {
      this.router.navigateByUrl('/login')
    }
    else {
      let result = JSON.parse(sessionStorage.getItem('result') || '{}');
      this.Name = result.loggedInUser.name;
      this.Role = result.loggedInUser.role;
      this.ImageSRC = result.loggedInUser.image;

      if (this.Role == "Publisher") {
        this.Admin = true;
      }
    }
  }

  ngOnInit(): void {
  }

  getImage() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.ImageSRC);
  }

}
