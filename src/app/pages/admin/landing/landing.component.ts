import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private cartService:CartServiceService){}
  products: any[] = [
    { id: 1, name: 'Nike mens Air Jordan 1 Mid', price: 110, imageUrl: 'https://celestialprom.com/wp-content/uploads/2023/11/celestialprom-27-scaled-celestialprom-Untitled-celestialprom.jpg' },
    { id: 2, name: 'Nike mens Air Jordan 2 Mid', price: 80, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png' },
    { id: 3, name: 'Nike mens Air Jordan 3 Mid', price: 98, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ad55c31f-1de0-40d9-8563-bfc9d9c239c7/air-huarache-premium-mens-shoes-JppwBb.png' },
    { id: 4, name: 'Nike mens Air Force 1', price: 180, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/501b85a2-8e91-4348-b75f-609c18b2bb51/air-max-1-mens-shoes-2C5sX2.png'},
    { id: 5, name: 'Nike mens Court Vision Mid', price: 210, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fb76cb7-fb72-4faf-8367-ec7498a7c871/court-vision-mid-next-nature-mens-shoes-Ks2QFk.png'}
  ];
  addToCart(product:any) {
    alert('item added to the cart');
    this.cartService.addToCart(product);
    // Optionally, show a confirmation message
  }
}

