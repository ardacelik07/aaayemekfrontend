import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  odemeyap(){
    this.toastr.success("Başarılı bir şekilde ödeme yapıldı", "Başarılı");
  
    this.router.navigateByUrl('/memberedit');
  }
}
