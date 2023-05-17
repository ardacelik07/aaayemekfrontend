import { Injectable } from '@angular/core';
import { ReplaySubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class accountService {
  number = 1;
  private currentUserSource = new ReplaySubject<number | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor() { }


  login(){
    this.currentUserSource.next(this.number);
  }

  register(){
    this.currentUserSource.next(this.number);
  }

  logout(){
    this.currentUserSource.next(null);
  }
}
