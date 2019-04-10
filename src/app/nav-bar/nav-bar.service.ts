import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  public navFlag:boolean=true;

  constructor() { }

  setHide(){
    this.navFlag = false;
  }
  setShow(){
    this.navFlag = true;
  }
}
