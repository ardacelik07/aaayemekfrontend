import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgotPasswordForm:FormGroup = new FormGroup({});

  constructor(private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
     
    })
  }
  

  passwordchange(){
    console.log(this.forgotPasswordForm.value);
    this.toastr.success("şifreniz başarıyla email adresinize gönderildi", "Başarılı");
    this.router.navigateByUrl('reset-password');

  
  }

}
