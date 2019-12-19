import { Component, OnInit } from '@angular/core';
import * as Constants from '../../constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  appname:any = Constants.appname
  constructor() { }

  llamar() {
  }
  ngOnInit() {
  }

}
