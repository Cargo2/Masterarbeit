import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Orders';
import { OrdersService } from '../../../services/orders.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../partials/search/search.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, SearchComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  orders: Order[] = [];
  constructor( private ordersService:OrdersService, activatedRoute:ActivatedRoute) {  
    let ordersObservable:Observable<Order[]>;

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) 
        ordersObservable = ordersService.getOrdersBySearchTerm(params.searchTerm);
      else
        ordersObservable = ordersService.getAll();
      
        ordersObservable.subscribe((orders) => {
          this.orders = orders;
        })
    
    })

  }
}
