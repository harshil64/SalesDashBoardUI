import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfileModel } from '../Models/ProfileModel';
import { WebAPIService } from '../Services/web-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  host: {
    class: 'classToFixDisplayIssue'
  }
})
export class ProfileComponent implements OnInit {
  Profile: ProfileModel;
  constructor(private webapi: WebAPIService, private sanitizer: DomSanitizer) { 
    let getMyBooksCall = this.webapi.GetAuthorProfile();
    getMyBooksCall.subscribe((data: any) => {
      this.Profile = data.result;
    })
  }

  ngOnInit(): void {
  }

  getImage(img: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }
}
