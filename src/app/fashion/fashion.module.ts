import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './mensFashion/accessories/accessories.component';
import { ClothingComponent } from './mensFashion/clothing/clothing.component';
import { FootwearComponent } from './mensFashion/footwear/footwear.component';
import { SortFilterComponent } from '../shared/sort-filter/sort-filter.component';
import { FilterComponent } from '../shared/filter/filter.component';

const routes: Routes = [
    { path: 'fashion/mensAccessories', component: AccessoriesComponent},
    { path: 'fashion/mensClothing', component: ClothingComponent },
    { path: 'fashion/mensFootwear', component: FootwearComponent },
  ];

@NgModule({
    declarations: [
        AccessoriesComponent,
        ClothingComponent,
        FootwearComponent,
        SortFilterComponent
      ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) ],
  exports: [
      RouterModule 
   ] 
})
export class MensFashionModule { };