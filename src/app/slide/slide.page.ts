import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  constructor() { }
  slideOpts = {
    initialSlide: 0
    //speed: 400
  };
  
  next() {
    //this.slideOpts.slideNext();
  }
  
  prev() {
   //this.slideOpts.initialSlide
  }
  ngOnInit() {
  }

}
