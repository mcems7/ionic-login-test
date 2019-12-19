import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { CommonService } from 'src/app/api/common.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../../interfaces/interface.user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:FormGroup;
  current_user:IUser;
  constructor(
    private userService:UserService,
    private commonService:CommonService,
    public formBuilder : FormBuilder,
    //public router : Router,
  ) {    
    this.user = this.formBuilder.group({
      name : ['' ,Validators.required],
      last_name : ['',Validators.required],
      email: [
        '', 
        Validators.compose([
          Validators.maxLength(255), 
          Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), 
          Validators.required
        ])
      ],
      phone : ['',Validators.required],
      bornday : ['',Validators.required]
    });
    this.actualizardatos();
    
    
   }

  updateprofile() {
      
  const user = this.user.value;
  const body = JSON.stringify({
    name : user.name,
    last_name : user.last_name,
    email : user.email,
    password : user.password,
    phone : user.phone,
    bornday : user.bornday,
    conditions : user.conditions});
    this.userService.update_current_user(body).subscribe(
      (data) => {
          //console.log(data);
          var respuesta = JSON.parse(JSON.stringify(data));
          //console.log(data);
          this.commonService.presentAlert('Actualizar Información',respuesta.message);
      },
      (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            //console.log('Error de cliente #'+err.status);
            //this.commonService.presentAlert('Crear Cuenta','Error:'+err.status+'. Hubo un error al enviar el mensaje, intente de nuevo por favor.');
          } else {
            //console.log('Error de Servidor #'+err.status);
            //this.commonService.presentAlert('Crear Cuenta','Error:'+err.status+'. Disculpe las molestias, Hubo un error con el servidor.'+JSON.stringify(err));
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
            this.commonService.presentAlert('Actualizar Información','Disculpe, Los datos proporcionados no son válidos. ');
            this.actualizardatos();
}
//this.commonService.presentAlert('Crear Cuenta',"Hubo un error al registrarse: "+JSON.stringify(err));
}
);
}
actualizardatos(){
  this.userService.current_user()
  .subscribe(datauser =>{
    this.current_user = datauser as IUser;
    this.user.setValue({
        name : this.current_user.name,
        last_name : this.current_user.last_name,
        email : this.current_user.email,
        phone : this.current_user.phone,
        bornday : this.current_user.bornday
    })
  });
}
  ngOnInit() {
    /*
    this.userService.current_user()
    .subscribe(datauser =>{
      console.log(datauser);
    });
    */
  }

}
