import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pomodoro-login',
  templateUrl: 'public/login/login.component.html'
})
export default class LoginComponent {
  loginForm: FormGroup;
  notValidCredentials: boolean = false;

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  authenticate(event) {
    let credentials: any = this.loginForm.value;
    this.notValidCredentials = !this.loginForm.valid && this.loginForm.dirty;

    if(credentials.username === 'kangleyu' && credentials.password === 'kangleyu') {
      this.router.navigateByUrl('/');
    } else {
      this.notValidCredentials = true;
    }
  }
}