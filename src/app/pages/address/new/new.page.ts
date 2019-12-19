import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/api/user.service';
import { CommonService } from 'src/app/api/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  addresses:FormGroup;
  constructor( 
    private userService:UserService,
    private commonService:CommonService,
    public modalController: ModalController,
    public formBuilder: FormBuilder
    ) {
      
      this.addresses = this.formBuilder.group({
        address : ['',Validators.required]
      });
      
    }

  cancel() {
    this.modalController.dismiss();
  }

  accept() {

      
    const addresses = this.addresses.value;
    const body = JSON.stringify({
      address : addresses.address,
      });
      this.userService.new_address(body).subscribe(
        (data) => {
            //console.log(data);
            var respuesta = JSON.parse(JSON.stringify(data));
            //console.log(data);
            this.commonService.presentAlert('Nueva Dirección',respuesta.message);
            //this.router.navigate(['home']);
            this.modalController.dismiss({
              conditions:true
            });
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('Error de cliente #'+err.status);
              //this.commonService.presentAlert('Crear Cuenta','Error:'+err.status+'. Hubo un error al enviar el mensaje, intente de nuevo por favor.');
            } else {
              console.log('Error de Servidor #'+err.status);
              //this.commonService.presentAlert('Crear Cuenta','Error:'+err.status+'. Disculpe las molestias, Hubo un error con el servidor.'+JSON.stringify(err));
            }
           
            this.commonService.presentAlert('Nueva Dirección','Disculpe, Los datos proporcionados no son válidos. ');
            //this.commonService.presentAlert('Crear Cuenta',"Hubo un error al registrarse: "+JSON.stringify(err));
            this.modalController.dismiss();
          }
    );
  }


  ngOnInit() {
  }

}
