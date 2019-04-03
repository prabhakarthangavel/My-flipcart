import { Component, OnInit } from '@angular/core';
import { SortFilterService } from '../sort-filter.service';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.css']
})
export class SortFilterComponent implements OnInit {
  public sortOrder:string;
  
  constructor(private sortFilter:SortFilterService) { }

  ngOnInit() {
  }

  sort(){
    this.sortFilter.setSort(this.sortOrder);
  }

  radioChangeHandler(event){
    this.sortOrder = event.target.value;
  }
}
