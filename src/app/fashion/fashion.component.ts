import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("working")
  }

  clickMen(event:HTMLInputElement){
    let showMen: boolean = true;
    showMen != showMen;
    console.log("****MENsss******",event);
  }

}
