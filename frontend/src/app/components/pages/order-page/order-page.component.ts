import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Orders';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../../services/orders.service';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CommonModule, NotFoundComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
  order!: Order;
  constructor(activatedRoute:ActivatedRoute, orderService:OrdersService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        orderService.getOrdersById(params.id).subscribe(serverOrder => {
          this.order = serverOrder;
        });
    });
  }

}  
