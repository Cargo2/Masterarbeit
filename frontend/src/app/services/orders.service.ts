import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Orders';
import { sampleOrders } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getAll():Order[]{
    return sampleOrders;
  }

  getOrdersBySearchTerm(searchTerm:string){
    return this.getAll().filter(order => order.headerText.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getOrdersById(id:string){
    return this.getAll().find(order => order.id === id) ?? new Order();
  }
}
