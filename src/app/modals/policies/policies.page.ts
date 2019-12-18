import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as Constants from '../../constants';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {
  empresa:any = Constants.empresa;
  constructor( 
    public modalController: ModalController
    ) { }

  cancel() {
    this.modalController.dismiss();
  }

  accept() {
    this.modalController.dismiss({
      conditions:true
    });
  }


  ngOnInit() {
  }

}
