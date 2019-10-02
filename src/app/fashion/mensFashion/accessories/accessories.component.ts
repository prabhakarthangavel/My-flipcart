import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  public sortOrder;
  public sortedArray = [];
  public products:any =[];
  constructor() { }

  ngOnInit() {
  }

  getNotification(event) {
    this.sortOrder = event;
    this.sortArray();
  }

  sortArray() {
    if (this.sortOrder == "assending") {
      this.sortedArray = this.products.sort((a, b) => a.price - b.price)
    }
    else {
      this.sortedArray = this.products.sort((a, b) => b.price - a.price)
    }
  }
}
