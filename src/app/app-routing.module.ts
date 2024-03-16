import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { AboutComponent } from './pages/admin/about/about.component';
import { LandingComponent } from './pages/admin/landing/landing.component';
import { CartComponent } from './pages/admin/cart/cart.component';

const routes: Routes = [
 {
  path:"",
  redirectTo:"login",
  pathMatch:'full',
  

 },
 
 {
  path:'',
  component:LayoutComponent,
  children:[
    {
      path:"landing",
      component:LandingComponent
    },
   {
    path:"products",
    component:ProductsComponent
   },
   {
    path:"contact",
    component:ContactComponent
   },
   {
    path:"about",
    component:AboutComponent
   },
   {
    path:"cart",
    component:CartComponent
   }
  ]

  },
  {
    path:"login",
    component:LoginComponent,
    
  
   },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
