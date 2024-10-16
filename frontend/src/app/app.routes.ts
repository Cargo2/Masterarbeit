import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CreateorderPageComponent } from './components/pages/createorder-page/createorder-page.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [

    {path:'', component:HomeComponent, pathMatch:'full'},
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'order/:id', component:OrderPageComponent},
    {path:'login', component:LoginPageComponent},
    {path:'register', component:RegisterPageComponent},
    {path:'create', component:CreateorderPageComponent},
    {path:'dashboard', component:DashboardPageComponent},
    
];
