import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.css']
})
export class SortFilterComponent implements OnInit {
  public sortOrder:string;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  sendNotification(){
    this.notifyParent.emit(this.sortOrder);
  }

  radioChangeHandler(event){
    this.sortOrder = event.target.value;
  }
}
