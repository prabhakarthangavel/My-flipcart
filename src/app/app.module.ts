import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
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
import { MensFashionModule } from './fashion/fashion.module';
import { FilterComponent } from './shared/filter/filter.component';
import { ProductDetailComponent } from './shared/product-detail/product-detail.component';

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

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MensFashionModule,
    RouterModule.forRoot([
      { path: '', component:LandingComponent},
      { path: 'fashion', component:FashionComponent},
      { path: 'electronics',component:ElectronicsComponent},
      { path: 'home', component:HomeComponent},
      { path: 'offers', component:OffersComponent},
      { path: 'filterProducts', component:FilterComponent },
      { path: 'productDetail/:name', component: ProductDetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
