import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export default class CanActivateService {
  canActivate() {
    let magicWord = prompt('Say your name!');
    return magicWord === 'kangleyu';
  }
}