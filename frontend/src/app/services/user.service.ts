import { Injectable } from '@angular/core';
import { User } from '../shared/models/Users';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/IUserRegister';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;


  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }


  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            'Login erfolgreich',
            'Willkommen', { timeOut: 3000, closeButton: true, progressBar: true }
          );
          console.log("einen user gefunden");
          console.log(user);

        },
        error: (errorReponse) => {
          this.toastrService.error(
            'Login fehlgeschlagen',
            'Fehler', { timeOut: 3000, closeButton: true, progressBar: true }
          );

        }
      })
    );
  }

  register(userRegister:IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            'Registrierung erfolgreich',
            'Willkommen', { timeOut: 3000, closeButton: true, progressBar: true }
          );
        },
        error: (errorReponse) => {
          this.toastrService.error(
            'Registrierung fehlgeschlagen',
            'Fehler', { timeOut: 3000, closeButton: true, progressBar: true }
          )
        }  
      })
    )
  }

  logout() {
    localStorage.removeItem(USER_KEY);
    this.userSubject.next(new User());
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    if (typeof window !== 'undefined' && window.localStorage) {

      const userJson = localStorage.getItem(USER_KEY);
      if (userJson) {
        return JSON.parse(userJson);
      }
    
    }
    
    return new User();
  }


}
