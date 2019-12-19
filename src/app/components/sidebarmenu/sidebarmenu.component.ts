import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaravelPassportService } from 'laravel-passport';
//import { ViewController } from '@ionic/core';
//import { BehaviorSubject } from 'rxjs';
//import { BehaviorSubject } from "rxjs/Rx";
import * as Constants from '../../constants';
 
@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.scss'],
})
export class SidebarmenuComponent implements OnInit {
  navigate : any;
  appname : any = Constants.appname;
  public islogin: any;
  constructor(
    public router : Router,
   // private viewCtrl : ViewController,
    private laravelPassportService : LaravelPassportService
  ) {
    this.sideMenu(this.laravelPassportService.isUserLoggedIn());
   // console.log(this.navigate);
    //this.islogin = this.laravelPassportService.isUserLoggedIn();
    //this.sideMenu(this.islogin);
    //this.ionViewCanEnter ();

    /*
      this.islogin.subscribe((value) => {
        console.log(value);
        this.sideMenu(value);
        if (true === value) {
            // do some stuff
        } else {
            // do some other stuff
        }
      });
      */

   }
   /*
    async ionViewCanEnter () {
      let isAuthenticated = await this.laravelPassportService.isUserLoggedIn();
      this.sideMenu(isAuthenticated);
      return isAuthenticated;
    }*/
  ngOnInit() {
    console.log('ngOnInit');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.sideMenu(this.laravelPassportService.isUserLoggedIn());
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.sideMenu(this.laravelPassportService.isUserLoggedIn());
  }
  routerLink(url){
    console.log(url);
    this.router.navigate([url]);
  }
  sideMenu(value)
  {
    if (value){
    
    this.navigate =
    [
      /*
      {
        title : "Inicio",
        url   : "/home",
        icon  : "svg/md-home.svg"
      },
      */
      {
        title : "Menu",
        url   : "/list",
        icon  : "svg/md-apps.svg"
      },
     
      {
        title : "Dirección",
        url   : "/address",
        icon  : "svg/md-pin.svg"
      },
      {
        title : "Información Personal",
        url   : "/profile",
        icon  : "svg/md-person.svg"
      },
      {
        title : "Contactar",
        url   : "/about",
        icon  : "svg/md-help.svg"
       
      },
      {
        title : "Cerrar Sesión",
        url   : "/logout",
        icon  : "svg/md-exit.svg"
      },
     
    ]
  }else{
    this.navigate =
    [
      
      {
        title : "Inicio",
        url   : "/home",
        icon  : "svg/md-home.svg"
      },
      
    {
      title : "Contactar",
      url   : "/contactenos",
      icon  : "svg/md-exit.svg"
    },
   
  ]
  }
  }
}
