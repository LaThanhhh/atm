import { TestBed } from '@angular/core/testing';

import { TaiKhoanThuNghiemService } from './tai-khoan-thu-nghiem.service';

describe('TaiKhoanThuNghiemService', () => {
  let service: TaiKhoanThuNghiemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaiKhoanThuNghiemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
