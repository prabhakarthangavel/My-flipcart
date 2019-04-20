import { Component, OnInit, Pipe } from '@angular/core';
import { MensFashionClothingService } from './mens-fashion-clothing.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css'],
})
export class ClothingComponent implements OnInit {
  public navbarFlag = true;
  public products:any =[];
  public products1:any = [];
  public sortOrder;
  public sortedArray = [];
  public categoryList = [];
  public length:number;
  
  constructor(private clothingService: MensFashionClothingService) { }

  ngOnInit() {
    // Usual listing the products
    if(!this.clothingService.getSelectedCategory()){
      this.clothingService.getItems().subscribe(
        data => {
          this.products = data;
          this.length = this.products.length;
          console.log("THis.products", this.products,this.length);
          this.clothingService.setLength(this.products.length);
          this.category();
        })
        this.clothingService.setCategory(this.categoryList);
    }
    // Filtering the products based on the selection
    else{
      console.log("this.lenght",this.length)
      this.clothingService.getItems().subscribe(
        data => {
          this.products1 = data;
          this.length = this.products1.length;
          for(let i=0;i<this.length;i++){
            if(data[i].category === this.clothingService.getSelectedCategory()){
              this.products.push(data[i]);
            }
          }
          console.log("ths.products1",this.products);
          this.clothingService.setLength(this.products.length);
          this.category();
        })
    }        
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

  // checking and removing the duplicate category
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
