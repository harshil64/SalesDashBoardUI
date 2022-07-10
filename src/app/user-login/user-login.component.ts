import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebAPIService } from '../Services/web-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private webapi: WebAPIService) { 
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email]],
      userpassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    let loginresult = this.webapi.login(this.loginForm.value);

    loginresult.subscribe((data: any) => {
      if(data.statusCode == 400)
      {
        console.log(data.validation[0].title);
      }
      else{
        sessionStorage.setItem('result', JSON.stringify(data.result));
        this.router.navigateByUrl('/home/dashboard')
      }
    })
  }
}
