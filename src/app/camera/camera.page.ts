import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage  {
  
  imageUrl: string | undefined; // Ensure this property is declared

  constructor() { }

  

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera 
      });
      this.imageUrl = image.webPath; // Assign the captured image URL
      console.log('Picture taken successfully!');
    } catch (error) {
      console.error('Camera error:', error); 
    }
  }
}
