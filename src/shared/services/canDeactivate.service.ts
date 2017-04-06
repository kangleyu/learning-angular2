import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export default class CanDeactivateService {
  canDeactivate() {
    return confirm('Are you sure you want to leave?');
  }
}