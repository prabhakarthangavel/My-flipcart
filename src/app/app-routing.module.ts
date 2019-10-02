import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { FilterComponent } from './shared/filter/filter.component';
import { ProductDetailComponent } from './shared/product-detail/product-detail.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{ path: '', component:LandingComponent},
{ path: 'fashion', component:FashionComponent},
{ path: 'fashion/:name', component:ProductsComponent},
{ path: 'electronics',component:ElectronicsComponent},
{ path: 'home', component:HomeComponent},
{ path: 'offers', component:OffersComponent},
{ path: 'filterProducts', component:FilterComponent },
{ path: 'productDetail/:name', component: ProductDetailComponent},
{ path: 'authenticate', component: AuthenticationComponent },
{ path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
