import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  private register: boolean;
  private loginFlag: boolean = true;
  public warn: boolean = false;
  public message: string;
  constructor(private _router:Router,private _auth: AuthenticateService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });


  newUser(){
   this._router.navigate(['/register']);
  }

  loginSubmit(){
    this._auth.login(this.loginForm.value).subscribe(
      data => {
        console.log("data",data);
        this.warn = true;
        this.message = data.status;
      });
  }

}
