import { Component } from '@angular/core';
import { Customer } from './customer/customer';
import { Products } from './products/products';
import { Dashboard } from './dashboard/dashboard';
import { Order } from './order/order';

@Component({
  selector: 'app-components',
  imports: [Customer, Products, Dashboard, Order],
  templateUrl: './components.html',
  styleUrl: './components.scss',
})
export class Components {

}
