import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangNhapPageRoutingModule } from './dang-nhap-routing.module';

import { DangNhapPage } from './dang-nhap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DangNhapPageRoutingModule
  ],
  declarations: [DangNhapPage]
})
export class DangNhapPageModule {}
