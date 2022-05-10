import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toast: any;
  constructor(
    private toastController: ToastController
  ) { }

  showToastMiddle(message: string, duration: number) {
    this.toast = this.toastController.create({
      'message': message,
      'duration': duration,
      'position' : 'middle'
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }

  showToast(message: string) {
    this.toast = this.toastController.create({
      'message': message,
      'duration': 2000,
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
