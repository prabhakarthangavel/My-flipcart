import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { NavBarService } from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public sortOrder;
  public sortedArray = [];
  public products: any = [];
  public products1: any = [];
  public categoryList = [];
  public length: number;
  public name: string; 
  public subscription: Subscription;
  constructor(private router: Router, private _actiRoute: ActivatedRoute,
    private _service: ProductService, private navbarService: NavBarService) { }

  ngOnInit() {
    this.navbarService.setShow();
    this.name = this._actiRoute.snapshot.paramMap.get('name');
    this._service.setName(this.name);
    // Usual listing the products
    if (!(this._service.getSelectedCategory() || this._service.getSelectedSize())) {
      this.subscription = this._service.getProducts(this.name).subscribe(
        data => {
          this.products = data;
          this.length = this.products.length;
          console.log("THis.products", this.products, this.length);
          this._service.setLength(this.products.length);
          this.category();
        });
      this._service.setCategory(this.categoryList);
    }
    // Filtering the products based on the selection Category & Size
    else {
      this.subscription = this._service.getProducts(this.name).subscribe(
        data => {
          this.products1 = data;
          this.length = this.products1.length;
          for (let i = 0; i < this.length; i++) {
            if(this.name === "mensClothing"){
              if (data[i].category === this._service.getSelectedCategory() &&
              (data[i].size[0] === this._service.getSelectedSize() ||
                data[i].size[1] === this._service.getSelectedSize() ||
                data[i].size[2] === this._service.getSelectedSize())) {
              this.products.push(data[i]);
            }
            }else {
              if(data[i].category === this._service.getSelectedCategory()){
              this.products.push(data[i]);
            }
          }
          }
          console.log("ths.products1", this.products);
          this._service.setLength(this.products.length);
          this.category();
        })
    }
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

  productSelect(name) {
    this.router.navigate(['productDetail', name]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
