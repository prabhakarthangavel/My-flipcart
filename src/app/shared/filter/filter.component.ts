import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public setBoolean:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  hideShow(){
    this.setBoolean =! this.setBoolean;
    console.log(this.setBoolean)
  }
}
