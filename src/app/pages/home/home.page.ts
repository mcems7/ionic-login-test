import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../api/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private router:Router,
    private userService:UserService
    ) { }

  redirectLogin(){
    this.router.navigate(['login']);
  }
  redirectSlide (){
    this.router.navigate(['slide']);
  }
  ngOnInit() {
    
    
  }
}
