import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as Constants from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public alertController: AlertController
  ) { }
  async presentAlert(title, message,arrbuttons = ['Aceptar']) {
    const alert = await this.alertController.create({
      header: Constants.appname,
      subHeader: title,
      message: message,
      buttons: arrbuttons
    });

    await alert.present();
  }
}
