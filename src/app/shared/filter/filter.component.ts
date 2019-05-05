import { Component, OnInit } from '@angular/core';
import { MensFashionClothingService } from '../../fashion/mensFashion/clothing/mens-fashion-clothing.service';
import {Location} from '@angular/common';
import { NavBarService } from '../../nav-bar/nav-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public setBoolean:boolean=false;
  public setBoolean1:boolean=false;
  public categoryList=[];
  public sizeList=["S","M","L"];
  public setResults:number;
  public selectedCategory:string;
  public selectedSize:string;

  constructor(private clothingService:MensFashionClothingService, 
              private _location: Location,
              private navbarService: NavBarService,
              private router: Router) { }

  ngOnInit() {
    this.categoryList = this.clothingService.getCategory();
    if(this.clothingService.getSelectedCategory() || this.clothingService.getSelectedSize()){
      this.selectedCategory = this.clothingService.getSelectedCategory();
      this.selectedSize = this.clothingService.getSelectedSize();
    }
    if(this.categoryList){
      this.selectedCategory = this.categoryList[0];
    }
    this.navbarService.setHide();
    this.setResults = this.clothingService.getLength();
    }

  hideShow(){
    this.setBoolean =! this.setBoolean;
  }

  hideShow1(){
    this.setBoolean1 =! this.setBoolean1;
  }

  backClicked() {
    this._location.back();
  }

  categorySelect(event){
    this.selectedCategory = event.target.innerText;
    this.hideShow();
  }

  sizeSelect(event){
    this.selectedSize = event.target.innerText;
    this.hideShow1();
  }

  applyClicked(){
    console.log("applyclicked",this.selectedCategory,this.selectedSize);
    this.clothingService.setSelectedCategory(this.selectedCategory);
    this.clothingService.setSelectedSize(this.selectedSize);
    this.router.navigate(['fashion/mensClothing']);
  }

  ngOnDestroy(){
    this.navbarService.setShow();
  }

}
