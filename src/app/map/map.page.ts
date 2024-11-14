import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

declare var L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map', { static: true }) mapElement!: ElementRef;
  map: any;
  address: string = '';

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    const position = await this.getCurrentLocation();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    this.map = L.map(this.mapElement.nativeElement).setView([latitude, longitude], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);
    
    L.marker([latitude, longitude]).addTo(this.map).bindPopup('Vị trí của bạn').openPopup();

    this.getAddress(latitude, longitude);
  }

  async getCurrentLocation(): Promise<any> {
    const locOptions = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
    return await Geolocation.getCurrentPosition(locOptions);
  }

  getAddress(latitude: number, longitude: number) {
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
      .then(response => response.json())
      .then(data => {
        if (data && data.display_name) {
          this.address = data.display_name; 
        } else {
          this.address = 'Không tìm thấy địa chỉ';
        }
      })
      .catch(error => {
        console.error('Lỗi khi lấy địa chỉ:', error);
        this.address = 'Lỗi khi lấy địa chỉ';
      });
  }
}
