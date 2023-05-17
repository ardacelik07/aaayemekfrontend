import { Component, OnInit } from '@angular/core';
import { accountService } from '../services/accountService';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public accountservice:accountService,private router:Router) { }

  ngOnInit(): void {
  }
  

   logout(){
    this.accountservice.logout();
    this.router.navigateByUrl('home');
   }


}
