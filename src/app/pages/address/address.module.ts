import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressPageRoutingModule } from './address-routing.module';

import { AddressPage } from './address.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewPage } from './new/new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    AddressPageRoutingModule
  ],
  declarations: [NewPage, AddressPage],
  entryComponents: [NewPage]
})
export class AddressPageModule {}
