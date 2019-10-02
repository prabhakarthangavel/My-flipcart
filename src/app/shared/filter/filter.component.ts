import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavBarService } from '../../nav-bar/nav-bar.service';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/product.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public setBoolean: boolean = false;
  public setBoolean1: boolean = false;
  public categoryList = [];
  public sizeList = ["S", "M", "L"];
  public setResults: number;
  public selectedCategory: string;
  public selectedSize: string;
  public hideSize: boolean = false;
  constructor(private _service: ProductService,
    private _location: Location,
    private navbarService: NavBarService,
    private router: Router) { }

  ngOnInit() {
    this.categoryList = this._service.getCategory();
    if (!this._service.getName()){
      this._location.back();
    } else if (this._service.getName() === "mensAccessories") {
      this.hideSize = true;
    } else {
      this.selectedCategory = this._service.getSelectedCategory();
      this.selectedSize = this._service.getSelectedSize();
    }
    if (this.categoryList) {
      this.selectedCategory = this.categoryList[0];
    }
    this.navbarService.setHide();
    this.setResults = this._service.getLength();
  }

  hideShow() {
    this.setBoolean = !this.setBoolean;
  }

  hideShow1() {
    this.setBoolean1 = !this.setBoolean1;
  }

  backClicked() {
    this._location.back();
  }

  categorySelect(event) {
    this.selectedCategory = event.target.innerText;
    this.hideShow();
  }

  sizeSelect(event) {
    this.selectedSize = event.target.innerText;
    this.hideShow1();
  }

  applyClicked() {
    console.log("applyclicked", this.selectedCategory, this.selectedSize);
    this._service.setSelectedCategory(this.selectedCategory);
    this._service.setSelectedSize(this.selectedSize);
    this._location.back();
  }

  ngOnDestroy() {
    this.navbarService.setShow();
  }

}
