import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';

export const routes: Routes = [

    {path:'', component:HomeComponent, pathMatch:'full'},
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'order/:id', component:OrderPageComponent},
    
];
