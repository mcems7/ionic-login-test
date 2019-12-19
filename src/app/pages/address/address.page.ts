import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewPage } from './new/new.page';
import { UserService } from 'src/app/api/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import * as Constants from '../../constants';
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  public items: Array<{ id: number; user_id: number; address: string; }> = [];
  constructor(
    public alertController: AlertController,
    private modalController:ModalController,
    private userService:UserService
  ) { 
    this.get_addresses();
  }

  async borrar(id,address) {
      const alert = await this.alertController.create({
        header: Constants.appname,
        subHeader: 'Eliminar dirección',
        message: '¿Esta seguro que desea eliminar la dirección '+address+'?.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Aceptar',
            handler: () => {
                //console.log(id);
                const body = JSON.stringify({
                id : id
                });
                this.userService.delete_address(body).subscribe(
                  (data) => {
                        //console.log(data);
                        this.get_addresses();
                        return true;
                },
                (err: HttpErrorResponse) => {
                  return false;
                }
                );
            }
          }
        ]
      });
  
      await alert.present();
    
  

  }
  async new_address() {
    const modal = await this.modalController.create({
      component: NewPage
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data){
      //console.log(data);
      this.get_addresses();
    }else{
      console.log('false');
    }
  }
  doRefresh(event){
    this.get_addresses();
    setTimeout(() => {
      event.target.complete();
    }, 2000); 
  }
  async get_addresses() {
    this.userService.get_addresses().subscribe(
        data => {
          this.items = data as Array<{ id: number; user_id: number; address: string; }>;
          //console.log(data);
          //this.items.fill(data.address);
        }
    );
     
//        

  }
  ngOnInit() {
    
  }

}
