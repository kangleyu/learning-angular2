import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import AuthenticationService from './authentication.service';

@Injectable()
export default class CanActivateService {

  canActivate() {
    return AuthenticationService.isAuthorized();
  }
}