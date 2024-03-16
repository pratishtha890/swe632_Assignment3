import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private items: any[] = [];
  //private product: any[] = [];
  constructor() { }
  

  addToCart(product: any) {
    const existingProductIndex = this.items.findIndex(item => item.product.id === product.id);
    if (existingProductIndex >= 0) {
      this.items[existingProductIndex].quantity += 1;
    } else {
      this.items.push({product, quantity: 1});
    }
  }

  getItems() {
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((total, currentItem) => total + currentItem.product.price * currentItem.quantity, 0);
  }
}
