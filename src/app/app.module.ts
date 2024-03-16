import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { AboutComponent } from './pages/admin/about/about.component';
import { LandingComponent } from './pages/admin/landing/landing.component';
import { CartComponent } from './pages/admin/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    LandingComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
