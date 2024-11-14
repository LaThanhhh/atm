import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThongTinTaiKhoanPageRoutingModule } from './thong-tin-tai-khoan-routing.module';

import { ThongTinTaiKhoanPage } from './thong-tin-tai-khoan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThongTinTaiKhoanPageRoutingModule
  ],
  declarations: [ThongTinTaiKhoanPage]
})
export class ThongTinTaiKhoanPageModule {}
