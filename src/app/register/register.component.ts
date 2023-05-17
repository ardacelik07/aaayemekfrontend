import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { accountService } from '../services/accountService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, private toastr:ToastrService,private accountservice: accountService) { }
    


  registerForm= this.fb.group({
    displayName: ['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    phonenumber:['',Validators.required]
  })
  ngOnInit(): void {
  }
  OnSubmit(){
    this.toastr.success("Başarılı bir şekilde üye olundu", "Başarılı");
    console.log(this.registerForm.value);
    this.router.navigateByUrl('/restorantlar');
    this.accountservice.register();
  }

}
