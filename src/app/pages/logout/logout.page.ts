import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router:Router,
    private userService:UserService
    ) {

     }
  routerLink(url){
    this.router.navigate([url]);
  }
  confirmar() {
    this.userService.logout();
    this.routerLink('/home');
  }
  cancelar() {
    this.routerLink('/list')
  }
  ngOnInit() {
  }

}
