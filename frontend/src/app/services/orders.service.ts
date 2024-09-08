import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Orders';
import { sampleOrders } from '../../data';
import { ORDERS_BY_SEARCH_URL, ORDERS_URL, ORDER_BY_ID_URL } from '../shared/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Order[]>{
    return this.http.get<Order[]>(ORDERS_URL);
  }

  getOrdersBySearchTerm(searchTerm:string){
    return this.http.get<Order[]>(ORDERS_BY_SEARCH_URL + searchTerm);
  }

  getOrdersById(id:string):Observable<Order>{
    return this.http.get<Order>(ORDER_BY_ID_URL + id);
  }
}
