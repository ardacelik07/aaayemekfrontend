import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
 control: number = 0;
 control2: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
  this.control = 1;
  console.log(this.control);
  }
  delete2(){
   this.control2 =1;
   
  }
}
