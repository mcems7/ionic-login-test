import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { PoliciesPage } from '../../modals/policies/policies.page';
import * as Constants from '../../constants';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:FormGroup;
  confirm:any;
  MaxDate = moment().add(-18, 'years').format('YYYY-MM-DDTHH:mm');
  //2001-12-17T00:00
  
  constructor(
    public alertController: AlertController,
    public formBuilder : FormBuilder,
    public router : Router,
    private http: HttpClient,
    public modalController: ModalController
    ) {
    /*
      'name'     => 'required|string|max:255',
      'last_name'     => 'required|string|max:255',
      'email'    => 'required|string|email|unique:users|max:255',
      'phone' => 'required|number',
      'bornday' => 'required|date',
      'password' => 'required|min:6',
    */
      this.user = this.formBuilder.group({
        name : ['',Validators.required],
        last_name : ['',Validators.required],
        email: [
          '', 
          Validators.compose([
            Validators.maxLength(255), 
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), 
            Validators.required
          ])
        ],
        password : ['',
          Validators.compose([
            Validators.minLength(6), 
            Validators.required
          ])
        ],
        phone : ['',Validators.required],
        bornday : ['',Validators.required],
        conditions : ['',Validators.required]
      })
      
     }

  
     async terminosyCondiciones() {
      const modal = await this.modalController.create({
        component: PoliciesPage
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();
      if (data){
        this.user.controls.conditions.setValue(data.conditions);
        this.confirm = data.conditions;
        console.log(data.conditions);
      }else{
        this.user.controls.conditions.setValue(null);
        this.confirm = false;
      }
    }
    async presentAlert(message) {
      const alert = await this.alertController.create({
        header: 'DocToc',
        subHeader: 'Crear Cuenta',
        message: message,
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
    redirectLogin(){
      this.router.navigate(['login']);
    }

    signup() {
      const user = this.user.value;
      const url = Constants.url;
      const body = JSON.stringify({
        name : user.name,
        last_name : user.last_name,
        email : user.email,
        password : user.password,
        phone : user.phone,
        bornday : user.bornday,
        conditions : user.conditions});
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      headers = headers.set("X-Requested-With","XMLHttpRequest");
      headers = headers.set("Access-Control-Allow-Origin", "*");
      //this.presentAlert(JSON.stringify(headers));
        this.http.post(url, body, {headers: headers}).subscribe(
          (data) => {
              //console.log(data);
              var respuesta = JSON.parse(JSON.stringify(data));
              //console.log(data);
              this.presentAlert(respuesta.message);
              this.router.navigate(['home']);
          },
          (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                console.log('Error de cliente #'+err.status);
                //this.presentAlert('Error:'+err.status+'. Hubo un error al enviar el mensaje, intente de nuevo por favor.');
              } else {
                console.log('Error de Servidor #'+err.status);
                //this.presentAlert('Error:'+err.status+'. Disculpe las molestias, Hubo un error con el servidor.'+JSON.stringify(err));
              }
              if (err.status==422){
                var errores = JSON.parse(JSON.stringify(err));
                var mensaje = '';
                if (errores.name){
                  mensaje += errores.name+' ';
                }
                if (errores.lastname){
                  mensaje += errores.lastname+' ';
                }
                if (errores.email){
                  mensaje += errores.email+' ';
                }
                if (errores.password){
                  mensaje += errores.password+' ';
                }
                this.presentAlert('Disculpe, Los datos proporcionados no son válidos. ');
              }
              //this.presentAlert("Hubo un error al registrarse: "+JSON.stringify(err));
          }
      );
  }
  ngOnInit() {
  }

}
