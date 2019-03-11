import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  private showMen: boolean = false;
  private showWomen: boolean = false;
  private showKids: boolean = false;
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
