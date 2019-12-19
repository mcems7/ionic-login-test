import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LaravelPassportService } from 'laravel-passport';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user:FormGroup;//[formGroup]="user"
  constructor(
    public alertController: AlertController,
    public formBuilder : FormBuilder,
    public router : Router,
    private laravelPassportService : LaravelPassportService
    ) {
      const isLoggedIn =  this.laravelPassportService.isUserLoggedIn();
      console.log("Hay Login: "+isLoggedIn);
      if (isLoggedIn){
        this.router.navigate(['list']);
      }
    this.user = this.formBuilder.group({
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
      ]
    })

  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'DocToc',
      subHeader: 'Iniciar Sesión',
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
  redirectRegister(){
    this.router.navigate(['register']);
  }
  login(){
    const user = this.user.value;
    this.laravelPassportService.loginWithEmailAndPassword(user.email, user.password).subscribe(
    res=>{
      //console.log(res.token_type);
      //console.log(res.expires_in);
      //console.log(res.access_token);
      //console.log(res.refresh_token);
    
      this.router.navigate(['list']);
      //console.log(res);
    },
    err=>{
      //console.log(err);
      this.presentAlert("El usuario/contraseña no son correctos.");
    },()=>{
      //console.log('completed');
    }
    );
  }
  //this.router.navigate(['menu']);

  ngOnInit() {
  }

}
