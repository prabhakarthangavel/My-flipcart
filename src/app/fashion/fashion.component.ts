import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  public showMen: boolean = false;
  public showWomen: boolean = false;
  public showKids: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  clickMen(){
    this.showMen =! this.showMen;
  }

  clickWomen(){
    this.showWomen =! this.showWomen;
  }

  clickKids(){
    this.showKids =! this.showKids;
  }

}
