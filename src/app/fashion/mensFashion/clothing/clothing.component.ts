import { Component, OnInit } from '@angular/core';
import { MensFashionClothingService } from './mens-fashion-clothing.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  public products: any;
  constructor(private clothingService:MensFashionClothingService) { }

  ngOnInit() {
    this.clothingService.getItems().subscribe(
      data => {
        this.products = data;
        console.log("THis.products",this.products);
    })
  }

  post(){
    let post ={title:"test1"};

    this.clothingService.putItems(post).subscribe(
      data =>{
        console.log("***Put method******",data);
      })
  }

}
