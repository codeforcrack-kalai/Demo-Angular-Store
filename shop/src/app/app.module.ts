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

@NgModule({
  declarations: [
    AppComponent,
    AccessoriesComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
