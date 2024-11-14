import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaiKhoanThuNghiemService {
  [x: string]: any;
  private testAccount = {
    email: '@gmail.com',
    password: '1234',
    balance: 100000
  };

  private accounts: { email: string, password: string, balance?: number }[] = [];
  private currentAccount: { email: string, password: string, balance?: number } | null = null;
  private isAuthenticated = false;

  login(email: string, password: string): boolean {
    if (email === this.testAccount.email && password === this.testAccount.password) {
      this.isAuthenticated = true;
      return true;
    }
  
    const account = this.accounts.find(acc => acc.email === email && acc.password === password);
    if (account) {
      this.isAuthenticated = true;

      return true;
    }
  
    return false;
  }

  addAccount(email: string, password: string, balance: number = 0): boolean {
    const existingAccount = this.accounts.find(acc => acc.email === email);
    if (!existingAccount) {
      this.accounts.push({ email, password, balance });
      console.log('Account added:', email);
      this.isAuthenticated = true;
      this.currentAccount = { email, password, balance };
      return true;
    } else {
      console.log('Account already exists');
      return false;
    }
  }
  

  deleteAccount(email: string, password: string): boolean {
    const index = this.accounts.findIndex(acc => acc.email === email && acc.password === password);
    if (index > -1) {
      this.accounts.splice(index, 1);
      console.log('Account deleted:', email);
      return true;
    } else {
      console.log('Account not found');
      return false;
    }
  }

  getAllAccounts(): { email: string, password: string, balance?: number }[] {
    return this.accounts;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getEmail(): string {
    if (this.isAuthenticated && this.currentAccount) {
      return this.currentAccount.email;
    }
    return '';
  }

  getBalance(): number {
    if (this.isAuthenticated && this.currentAccount) {
      return this.currentAccount.balance || 0;
    }
    return 0;
  }

  logout() {
    this.isAuthenticated = false;
    this.currentAccount = null;
  }
}
