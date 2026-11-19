import { Component } from '@angular/core';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { Home } from './home/home';

@Component({
  selector: 'app-components',
  imports: [Products, Cart, Home],
  templateUrl: './components.html',
  styleUrl: './components.scss',
})
export class Components {

}
