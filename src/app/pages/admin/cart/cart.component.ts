import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  totalprice = this.cartService.getTotalPrice();
  constructor(private cartService: CartServiceService , private router:Router) {}
  checkout(){
    const confirmation = confirm('Do you really want to check out?');
    if (confirmation) {
      // Navigate to the checkout page
      this.router.navigate(['/checkout']); 
    }
    
  }
}
