import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { accountService } from '../services/accountService';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  model:any={}
  number = 1;
  loginForm:FormGroup = new FormGroup({});
  constructor(private router:Router,private toastr:ToastrService,private accountservice:accountService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('',Validators.required),
    })
  }
  

  login(){
    console.log(this.loginForm.value);
    this.toastr.success("şifreniz başarılı bir şekilde değiştirildi", "Başarılı");
    this.router.navigateByUrl('/restorantlar');
    this.accountservice.login();
  
    
  }

}
