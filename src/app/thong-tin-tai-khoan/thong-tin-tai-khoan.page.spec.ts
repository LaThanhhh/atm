import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinTaiKhoanPage } from './thong-tin-tai-khoan.page';

describe('ThongTinTaiKhoanPage', () => {
  let component: ThongTinTaiKhoanPage;
  let fixture: ComponentFixture<ThongTinTaiKhoanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinTaiKhoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
