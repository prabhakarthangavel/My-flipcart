import { Component, OnInit, Pipe } from '@angular/core';
import { MensFashionClothingService } from './mens-fashion-clothing.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css'],
})
export class ClothingComponent implements OnInit {
  public navbarFlag = true;
  public products: any;
  public sortOrder;
  public sortedArray = [];
  public categoryList = [];
  
  constructor(private clothingService: MensFashionClothingService) { }

  ngOnInit() {
    this.clothingService.getItems().subscribe(
      data => {
        this.products = data;
        console.log("THis.products", this.products);
        this.clothingService.setLength(this.products.length);
        this.category();
        this.clothingService.setCategory(this.categoryList);
      })
  }

  post() {
    let post = { title: "test1" };

    this.clothingService.putItems(post).subscribe(
      data => {
        console.log("***Put method******", data);
      })
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

  category() {
    let count = 0;
    let found = false;
    for (let i = 0; i < this.products.length; i++) {
      for (let j = 0; j < this.categoryList.length; j++) {
        if (this.products[i].category == this.categoryList[j]) {
          found = true;
        }
      }
      count++;
      if (count == 1 && found == false) {
        this.categoryList.push(this.products[i].category);
      }
      count = 0;
      found = false;
    }
  }

}
