import { Component, OnInit,Pipe } from '@angular/core';
import { MensFashionClothingService } from './mens-fashion-clothing.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css'],
})
export class ClothingComponent implements OnInit {
  private products: any;
  public sortOrder; 
  public sortedArray:any = [];
  

  constructor(private clothingService:MensFashionClothingService) { }
 
  ngOnInit() {
    this.clothingService.getItems().subscribe(
      data => {
        this.products = data;
        console.log("THis.products",this.products);
      })
        
  }

  bubbleSort(price) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < price.length; i += 1) {
        if (price[i - 1].price > price[i].price) {
          done = false;
          var tmp = price[i - 1].price;
          price[i - 1].price = price[i].price;
          price[i].price = tmp;
        }
      }
    }
    return price; 
  }

  post(){
    let post ={title:"test1"};

    this.clothingService.putItems(post).subscribe(
      data =>{
        console.log("***Put method******",data);
      })
  }

  getNotification(event){
    this.sortOrder = event;
    this.sortArray();
  }

  sortArray(){
    if(this.sortOrder == "assending"){
      this.sortedArray = this.products.sort((a, b) => a.price - b.price) 
    }
    else{
      this.sortedArray = this.products.sort((a, b) => b.price - a.price)
    }
  }
}
