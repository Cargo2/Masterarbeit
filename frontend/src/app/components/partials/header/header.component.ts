import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterModule, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/Users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterOutlet, 
            RouterLink, 
            RouterModule,
            RouterLinkActive,
            CommonModule],
})
export class HeaderComponent implements OnInit {

  user!:User;

  constructor(private userService:UserService ) {
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
   }

  ngOnInit(): void {
    
  }

  logout(){
    this.userService.logout();
  }

  isAuth() {
    return this.user.token;
  }
}
