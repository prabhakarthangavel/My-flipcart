import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MensFashionClothingService } from '../../fashion/mensFashion/clothing/mens-fashion-clothing.service';
import { NavBarService } from '../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product:any;
  public fullProduct:any;
  public allProducts;

  constructor(private _navbarService: NavBarService,
              private _actiRoute:ActivatedRoute,
              private _clothingService:MensFashionClothingService) { }

  ngOnInit() {
    this._navbarService.setHide();
    const name = this._actiRoute.snapshot.paramMap.get('name');
    this._clothingService.getItems().subscribe(
      data => {
        this.allProducts = data;
        for(let i=0;i<this.allProducts.length;i++){
          if(this.allProducts[i].name == name){
            this.product = this.allProducts[i];
            console.log(this.product)
          }
        }
      })  
  }

}
