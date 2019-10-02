import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { FilterComponent } from './shared/filter/filter.component';
import { ProductDetailComponent } from './shared/product-detail/product-detail.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProductsComponent } from './products/products.component';
import { SortFilterComponent } from './shared/sort-filter/sort-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavBarComponent,
    FashionComponent,
    ElectronicsComponent,
    HomeComponent,
    OffersComponent,
    FilterComponent,
    ProductDetailComponent,
    AuthenticationComponent,
    RegisterComponent,
    ProductsComponent,
    SortFilterComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
