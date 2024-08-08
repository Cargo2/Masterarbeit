import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Orders';
import { OrdersService } from '../../../services/orders.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  orders: Order[] = [];
  constructor( private ordersService:OrdersService ) {  

    this.orders = ordersService.getAll();
  }

}
