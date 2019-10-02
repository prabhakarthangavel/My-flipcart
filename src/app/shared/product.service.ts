import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public results: number;
  public category: any;
  public selectedCategory: string;
  public selectedSize: string;
  public name: string;
  private productsUrl = "http://localhost:8080/getProducts";
  constructor(private _http: HttpClient) { }

  getProducts(name) {
    return this._http.get(this.productsUrl + '/' + name);
  }

  setLength(length) {
    this.results = length;
  }

  setCategory(category) {
    this.category = category;
  }

  getLength() {
    return this.results;
  }

  getCategory() {
    return this.category;
  }

  setSelectedCategory(category) {
    this.selectedCategory = category;
  }

  setSelectedSize(size) {
    this.selectedSize = size;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

  getSelectedSize() {
    return this.selectedSize;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
