import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dang-nhap', 
    pathMatch: 'full'
  },
  {
    path: 'dang-nhap',
    loadChildren: () => import('./dang-nhap/dang-nhap.module').then( m => m.DangNhapPageModule)
  },
  {
    path: 'thong-tin-tai-khoan',
    loadChildren: () => import('./thong-tin-tai-khoan/thong-tin-tai-khoan.module').then( m => m.ThongTinTaiKhoanPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
