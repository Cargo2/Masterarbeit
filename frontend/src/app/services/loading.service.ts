import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  showLoading(){
    console.log('show loading');
    this.isLoadingSubject.next(true);
  }

  hideLoading(){
    console.log('hide loading');
    this.isLoadingSubject.next(false);
  }

  get isLoading(){
    return this.isLoadingSubject.asObservable();
  }
}
