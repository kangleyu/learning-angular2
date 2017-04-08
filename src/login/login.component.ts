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
  showUsernameHint: boolean = false;

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required, this.emailValidator]],
      password: ['', Validators.required]
    });

    const username = this.loginForm.controls['username'];
    username.valueChanges.subscribe(value => {
      this.showUsernameHint = (username.dirty && value.indexOf('@') < 0);
    });
  }

  authenticate(event) {
    let credentials: any = this.loginForm.value;
    this.notValidCredentials = !this.loginForm.valid && this.loginForm.dirty;

    if(credentials.username === 'kangleyu@gmail.com' && credentials.password === 'kangleyu') {
      this.router.navigateByUrl('/');
    } else {
      this.notValidCredentials = true;
    }
  }

  private emailValidator(control: FormControl): { [key: string]: boolean} {
    if(!/(.+)@(.+){2,}\.(.+){2,}/.test(control.value)) {
      return {
        'emailNotValid': true
      };
    }
    return null;
  }
}