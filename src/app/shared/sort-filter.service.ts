import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortFilterService {
  public sortSet:string;
  
  constructor() { }

  setSort(sortOrder){
    this.sortSet = sortOrder;
    console.log("*******event*******",this.sortSet);
  }

  getSort(){
    return this.setSort;
  }
}
