import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { accountService } from '../services/accountService';

@Component({
  selector: 'app-yorumyap',
  templateUrl: './yorumyap.component.html',
  styleUrls: ['./yorumyap.component.scss']
})
export class yorumyapComponent implements OnInit {
  model : any = {};
  constructor(private fb:FormBuilder, private router:Router, private toastr:ToastrService,private accountservice: accountService) { }
  registerForm= this.fb.group({
    displayName: ['',Validators.required],
    email:['',[Validators.required,Validators.email]],
   
    phonenumber:['',Validators.required],
    adres:['',Validators.required],

  })




  ngOnInit(): void {
  }
  OnSubmit(){
    this.toastr.success("Başarılı bir şekilde bilgileriniz güncellendi", "Başarılı");
  
    this.router.navigateByUrl('/restorantlar');
    this.accountservice.login();
  
  }
  
}
