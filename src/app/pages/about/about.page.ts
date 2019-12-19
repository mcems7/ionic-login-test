import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as Constants from '../../constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  appname:any = Constants.appname;
  phone:any = Constants.phone;
  constructor(
    private callNumber: CallNumber
  ) { }

  async llamar() { 
    this.callNumber.callNumber(this.phone, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  
  }
  ngOnInit() {
  }

}
