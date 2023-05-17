import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ToastrModule } from 'ngx-toastr';
import { CampainsComponent } from './campains/campains.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {  yorumyapComponent } from './yorumyap/yorumyap.component';
import { RestorantlarComponent } from './restorantlar/restorantlar.component';




import { BasketComponent } from './basket/basket.component';
import { PaymentComponent } from './payment/payment.component';





import { RestorantRegisterComponent } from './restorant-register/restorant-register.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CommentsComponent } from './comments/comments.component';
import { Restorant2Component } from './restorant2/restorant2.component';


 
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    CampainsComponent,
    yorumyapComponent,
    RestorantlarComponent,

  

   
    BasketComponent,
    PaymentComponent,


    
  
    RestorantRegisterComponent,
  
    ResetPasswordComponent,
       CommentsComponent,
       Restorant2Component
  

    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BsDropdownModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
