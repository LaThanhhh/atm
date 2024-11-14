import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaiKhoanThuNghiemService } from './services/tai-khoan-thu-nghiem.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent], // Chỉ để lại AppComponent
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    GoogleMapsModule // Giữ lại GoogleMapsModule ở đây
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TaiKhoanThuNghiemService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
