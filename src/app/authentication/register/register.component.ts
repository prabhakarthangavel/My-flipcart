import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public message: string;
  public warn: boolean = false;
  constructor(private _router: Router, private _auth: AuthenticateService) { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required)
  });

  cancel() {
    this._router.navigate(['/authenticate']);
  }

  registerSubmit() {
    this._auth.register(this.registerForm.value).subscribe(
      data => {
        console.log("Putdata", data);
        this.warn = true;
        this.message = data.status;
      });
  }

}
