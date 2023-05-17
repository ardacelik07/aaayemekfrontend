import { Component, OnInit } from '@angular/core';
import { restorant } from '../restorantlar/restorant';
import { Kategoriler } from '../restorantlar/Kategoriler';

@Component({
  selector: 'app-restorant2',
  templateUrl: './restorant2.component.html',
  styleUrls: ['./restorant2.component.scss']
})
export class Restorant2Component implements OnInit {
  brandIdSelected =0;
  typeIdSelected = 0;
  restorant: restorant[] = [
    { id: 1, name: 'usta donerci' },
    { id: 2, name: 'burger king' },
    { id: 3, name: 'sbarro' },
    { id: 4, name: 'hd iskender' },
    { id: 5, name: 'Mc donalds' },
    { id: 6, name: 'tavuk dünyası' }
  
  ];
  kategori: Kategoriler[] = [
    { id: 1, name: 'kebap' },
    { id: 2, name: 'hamburger' },
    { id: 3, name: 'pizza' },
    { id: 4, name: 'tavuk' },
   
  
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onBrandSelected(brandId:number){
    this.brandIdSelected = brandId;

  }
  onTypeSelected(typeId:number){
    this.typeIdSelected = typeId;
    
  }
}
