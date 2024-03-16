import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private cartService: CartServiceService) {}
  products: any[] = [
    { id: 1, name: 'Nike mens Air Jordan 1 Mid', price: 70, imageUrl: 'https://celestialprom.com/wp-content/uploads/2023/11/celestialprom-27-scaled-celestialprom-Untitled-celestialprom.jpg' },
    { id: 2, name: 'Nike mens Air Jordan 2 Mid', price: 120, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png' },
    { id: 3, name: 'Nike mens Air Jordan 3 Mid', price: 90, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ad55c31f-1de0-40d9-8563-bfc9d9c239c7/air-huarache-premium-mens-shoes-JppwBb.png' },
    { id: 4, name: 'Nike Air Force 107 LV8', price: 125, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/368a093d-7dc3-4141-966d-e61c09c59c53/air-force-1-07-lv8-mens-shoes-Zj9bVF.png' },
    { id: 5, name: 'Air Jordan 1 Mid', price: 125, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-6a253663-e5cd-49f6-918f-6685dc6b1f85/air-jordan-1-mid-shoes-X5pM09.png' },
    { id: 6, name: 'Nike Blazer Mid Pro Club', price: 97.97, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0499040b-f86a-40e7-bdb9-bae1beeccf3a/blazer-mid-pro-club-mens-shoes-3mzkQN.png' },
    { id: 7, name: 'Nike mens Air Jordan 1 Mid', price: 70, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c3e1c04-d916-4942-8aa9-dfc489a74f38/blazer-mid-pro-club-mens-shoes-3mzkQN.png' },
    { id: 8, name: 'Nike mens Air Jordan 2 Mid', price: 120, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0b75c0f-dd12-4463-81af-b0ccc2d4716e/court-vision-mid-next-nature-mens-shoes-j5K4rb.png' },
    { id: 9, name: 'Nike mens Air Jordan 3 Mid', price: 90, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-6a253663-e5cd-49f6-918f-6685dc6b1f85/air-jordan-1-mid-shoes-X5pM09.png' },
    { id: 10, name: 'Nike Air Force 107 LV8', price: 125, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/179c8229-aab7-4e86-8d07-c65ab8dc3dad/air-jordan-1-mid-mens-shoes-X5pM09.png' },
    { id: 11, name: 'Air Jordan 1 Mid', price: 125, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/288a2235-54ce-4f8e-a133-0117cbc381b4/air-jordan-1-mid-mens-shoes-X5pM09.png' },
    { id: 12, name: 'Nike Blazer Mid Pro Club', price: 97.97, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a842a15a-f4f2-4211-9a13-6cf82d6770e9/air-jordan-1-mid-mens-shoes-X5pM09.png' },
    { id: 13, name: 'Nike mens Air Jordan 1 Mid', price: 70, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a15d88b1-c61f-44c4-bd5b-ac96c64f1b4c/air-jordan-1-mid-shoes-X5pM09.png' },
    { id: 14, name: 'Nike mens Air Jordan 2 Mid', price: 120, imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a9e42fe-d07e-474d-8b41-080fc161cde0/p-6000-shoes-XkgpKW.png' },
    { id: 15, name: 'Nike mens Air Jordan 3 Mid', price: 90, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ad55c31f-1de0-40d9-8563-bfc9d9c239c7/air-huarache-premium-mens-shoes-JppwBb.png' },
    { id: 16, name: 'Nike Air Force 107 LV8', price: 125, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d2d6b61-3c5c-4b59-92ce-b2bf2d5a03dc/air-max-1-mens-shoes-2C5sX2.png' },
    { id: 17, name: 'Air Jordan 1 Mid', price: 125, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7335efc7-663a-4deb-9168-f049dcdc400f/air-max-1-mens-shoes-2C5sX2.png' },
    { id: 18, name: 'Nike Blazer Mid Pro Club', price: 97.97, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/501b85a2-8e91-4348-b75f-609c18b2bb51/air-max-1-mens-shoes-2C5sX2.png' },
  
  ];
  addToCart(product:any) {
    window.confirm('Item added successfully to the cart');
    this.cartService.addToCart(product);
    // Optionally, show a confirmation message
  }
}
