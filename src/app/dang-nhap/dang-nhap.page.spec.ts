import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DangNhapPage } from './dang-nhap.page';

describe('DangNhapPage', () => {
  let component: DangNhapPage;
  let fixture: ComponentFixture<DangNhapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DangNhapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
