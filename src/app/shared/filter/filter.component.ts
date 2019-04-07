import { Component, OnInit } from '@angular/core';
import { MensFashionClothingService } from '../../fashion/mensFashion/clothing/mens-fashion-clothing.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public setBoolean:boolean=false;
  public categoryList=[];
  public setResults:number;

  constructor(private clothingService:MensFashionClothingService, 
              private _location: Location) { }

  ngOnInit() {
    this.setResults = this.clothingService.getLength();
    this.categoryList = this.clothingService.getCategory();
    }

  hideShow(){
    this.setBoolean =! this.setBoolean;
  }

  backClicked() {
    this._location.back();
  }

}
