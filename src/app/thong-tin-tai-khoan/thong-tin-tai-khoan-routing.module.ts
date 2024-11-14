import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThongTinTaiKhoanPage } from './thong-tin-tai-khoan.page';

const routes: Routes = [
  {
    path: '',
    component: ThongTinTaiKhoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThongTinTaiKhoanPageRoutingModule {}
