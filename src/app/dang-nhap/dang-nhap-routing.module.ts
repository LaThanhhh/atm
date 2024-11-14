import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DangNhapPage } from './dang-nhap.page';

const routes: Routes = [
  {
    path: '',
    component: DangNhapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DangNhapPageRoutingModule {}
