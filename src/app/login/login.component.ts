import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject } from 'rxjs';
import { accountService } from '../services/accountService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model:any={}
  number = 1;
  loginForm:FormGroup = new FormGroup({});
  
  constructor(private router:Router,private toastr:ToastrService,private accountservice:accountService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    })
  }
  

  login(){
    console.log(this.loginForm.value);
    this.toastr.success("Başarılı bir şekilde giriş yapıldı", "Başarılı");
    this.router.navigateByUrl('/restorantlar');
    this.accountservice.login();
  
    
  }
}
