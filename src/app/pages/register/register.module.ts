import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { PoliciesPage } from './policies/policies.page';
import { RegisterPage } from './register.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule, 
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [PoliciesPage,RegisterPage],
  entryComponents: [PoliciesPage]
 
})
export class RegisterPageModule {}
