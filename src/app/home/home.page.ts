import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router:Router) { }

  redirectLogin(){
    this.router.navigate(['login']);
  }
  redirectSlide (){
    this.router.navigate(['slide']);
  }
  ngOnInit() {
  }
}
