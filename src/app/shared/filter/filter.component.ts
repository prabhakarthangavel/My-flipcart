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
  public categoryList=[];
  public setResults:number;
  public selectedCategory:string;

  constructor(private clothingService:MensFashionClothingService, 
              private _location: Location,
              private navbarService: NavBarService,
              private router: Router) { }

  ngOnInit() {
    if(this.clothingService.getSelectedCategory()){
      this.selectedCategory = this.clothingService.getSelectedCategory();
    }
    this.navbarService.setHide();
    this.setResults = this.clothingService.getLength();
    this.categoryList = this.clothingService.getCategory();
    }

  hideShow(){
    this.setBoolean =! this.setBoolean;
  }

  backClicked() {
    this._location.back();
  }

  categorySelect(event){
    this.selectedCategory = event.target.innerText;
    this.hideShow();
  }

  applyClicked(){
    console.log("applyclicked",this.selectedCategory)
    this.clothingService.setSelectedCategory(this.selectedCategory);
    this.router.navigate(['fashion/mensClothing']);
  }

  ngOnDestroy(){
    this.navbarService.setShow();
  }

}
