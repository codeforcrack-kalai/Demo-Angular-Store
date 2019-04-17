import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SliderComponent } from './template/slider/slider.component';
import { HomeComponent } from './template/home/home.component';
import { ItemComponent } from './template/item/item.component';
import { LoginComponent } from './template/login/login.component';
import { RegisterComponent } from './template/register/register.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { HttpClientModule } from '@angular/common/http';



 var config = {
    apiKey: "AIzaSyDX_Wyt54Kc_6tiOFAcYg0Mjpb3Rskxsb8",
    authDomain: "angular-demo-3108c.firebaseapp.com",
    databaseURL: "https://angular-demo-3108c.firebaseio.com",
    projectId: "angular-demo-3108c",
    storageBucket: "angular-demo-3108c.appspot.com",
    messagingSenderId: "701675485248"
  };


@NgModule({
  declarations: [
    AppComponent,
    AccessoriesComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    ItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
