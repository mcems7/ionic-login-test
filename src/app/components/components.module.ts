import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SplashComponent } from './splash/splash.component';
import { IsauthComponent } from './isauth/isauth.component';



@NgModule({
  declarations: [
    SidebarmenuComponent,
    HeaderComponent,
    SplashComponent,
    IsauthComponent
  ],
  
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    SidebarmenuComponent,
    HeaderComponent,
    SplashComponent,
    IsauthComponent
  ]
})
export class ComponentsModule { }

