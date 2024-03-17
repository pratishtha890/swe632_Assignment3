import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  todayDate : Date = new Date();
  randomNumber: number;
  price:number;

  constructor(private cart:CartServiceService) {
    this.randomNumber = this.generateRandomNumber(1, 1000000); // Generate a random number between 1 and 100
    this.price=this.cart.getTotalPrice();
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 


}
