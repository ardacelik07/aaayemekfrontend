import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CampainsComponent } from './campains/campains.component';
import {  yorumyapComponent } from './yorumyap/yorumyap.component';
import { RestorantlarComponent } from './restorantlar/restorantlar.component';




import { BasketComponent } from './basket/basket.component';
import { PaymentComponent } from './payment/payment.component';





import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CommentsComponent } from './comments/comments.component';
import { Restorant2Component } from './restorant2/restorant2.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'kampanyalar',component:CampainsComponent},
  {path:'memberedit',component:yorumyapComponent},
  {path:'restorantlar',component:RestorantlarComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'yorumlar',component:CommentsComponent},
  {path:'restorant2',component:Restorant2Component},




  {path:'basket',component:BasketComponent},
  {path:'payment',component:PaymentComponent},





 
  

 
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
