import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import  {routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    RouterModule, 
    HomeComponent, 
    CommonModule, 
    LoadingComponent,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    FormsModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
