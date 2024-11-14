import { Component, OnInit } from '@angular/core';
import { TaiKhoanThuNghiemService } from '../services/tai-khoan-thu-nghiem.service';

@Component({
  selector: 'app-thong-tin-tai-khoan',
  templateUrl: './thong-tin-tai-khoan.page.html',
  styleUrls: ['./thong-tin-tai-khoan.page.scss'],
})
export class ThongTinTaiKhoanPage implements OnInit {
  balance: number = 100000; 
  isLoggedIn: boolean = false;
  email: string = '';
  password: string = '';

  constructor(private taiKhoanThuNghiemService: TaiKhoanThuNghiemService) {}

  ngOnInit() {
    this.isLoggedIn = this.taiKhoanThuNghiemService.login(this.email, this.password);

    if (this.isLoggedIn) {
      this.balance = this.taiKhoanThuNghiemService.getBalance();
    } else {
      console.error('Login failed!'); 
    }
    if (this.taiKhoanThuNghiemService.isLoggedIn()) {
      this.email = this.taiKhoanThuNghiemService.getEmail(); 
    } else {
      console.error('User is not logged in');
    }
  }
  
}
