import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 
import { TaiKhoanThuNghiemService } from '../services/tai-khoan-thu-nghiem.service';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.page.html',
  styleUrls: ['./dang-nhap.page.scss'],
})
export class DangNhapPage {
  email: string = '';
  password: string = '';
  allAccounts: { email: string, password: string, balance?: number }[] = []; 

  constructor(
    private authService: TaiKhoanThuNghiemService,
    private router: Router,
    private alertController: AlertController 
  ) {}

  async Alert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header, 
      message: message, 
      buttons: ['OK'], 
      cssClass: 'custom-alert' 
    });
  
    await alert.present(); 
  }
  async onLogin() {
    if (this.email && this.password) { 
      if (this.authService.login(this.email, this.password)) {
        this.router.navigate(['/home']); 
      } else {
        await this.Alert('Lỗi', 'Thông tin đăng nhập không đúng'); 
      }
    } else {
      await this.Alert('Lỗi', 'Vui lòng nhập email và mật khẩu'); 
    }
  }
  
  async addAccount() {
    if (this.email && this.password) { 
      const result = this.authService.addAccount(this.email, this.password);
      if (result) {
        await this.Alert('Kết quả ', `Tài khoản '${this.email}' đã được thêm!`); 
      } else {
        await this.Alert('Kết quả', `Tài khoản '${this.email}' đã có sẵn`); 
      }
    } else {
      await this.Alert('Cảnh báo', 'Vui lòng nhập cả email và mật khẩu'); 
    }
  }

  async deleteAccount() {
    if (this.email && this.password) {
      const result = this.authService.deleteAccount(this.email, this.password);
      if (result) {
       
        await this.Alert('Kết quả', `Tài khoản  '${this.email}' đã được xóa!`);
      } else {
        await this.Alert('Kết quả', 'Xóa tài khoản thất bại hoặc tài khoản không tồn tại'); 
      }
    } else {
      await this.Alert('Cảnh báo', 'Vui lòng nhập cả email và mật khẩu');
    }
  }
  
  async viewAllAccounts() {
    this.allAccounts = this.authService.getAllAccounts();

    if (this.allAccounts.length > 0) {
      let accountsList = '\n';
      this.allAccounts.forEach((account, index) => {
        accountsList += `${index + 1}- ${account.email}\n\n`;
      });

      await this.Alert('Tất cả tài khoản', accountsList); 
    } else {
      await this.Alert('Thông báo', 'Không có tài khoản nào'); 
    }
  }
  
 
}
