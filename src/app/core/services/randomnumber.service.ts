import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import {  isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RandomnumberService  {
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  newRandomNumber!: number;
  generateUniqueRandomNumber(min: number, max: number): number {
if (isPlatformBrowser(this._PLATFORM_ID)) {
if(localStorage.getItem('previousRandomNumber')!=null){
    const previousNumber = localStorage.getItem('previousRandomNumber');

    do {
      this.newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (this.newRandomNumber.toString() === previousNumber);

    localStorage.setItem('previousRandomNumber', this.newRandomNumber.toString());
  }
  if(localStorage.getItem('previousRandomNumber')==null){
    const previousNumber = "30";

    do {
      this.newRandomNumber = 1;
    } while (this.newRandomNumber.toString() === previousNumber);

    localStorage.setItem('previousRandomNumber', this.newRandomNumber.toString());
  }
}
    return this.newRandomNumber;
  }
}