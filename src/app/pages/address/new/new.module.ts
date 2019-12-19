import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { NewPageRoutingModule } from './new-routing.module';

import { NewPage } from './new.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule, 
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NewPageRoutingModule
  ],
  declarations: [NewPage]
})
export class NewPageModule {}
