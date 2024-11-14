import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaiKhoanThuNghiemService } from '../services/tai-khoan-thu-nghiem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  email: string = '';

  constructor(
    private router: Router,
    private authService: TaiKhoanThuNghiemService
  ) {}

  ngOnInit() {
    this.email = this.authService.getEmail();
  }

  viewAccountInfo() {
    this.router.navigate(['/thong-tin-tai-khoan']);
  }
  
  navigateToCamera() {
    this.router.navigate(['/camera']);
  }

  navigateToLocation(){
    this.router.navigate(['/map']);
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/dang-nhap']); 
  }
}
