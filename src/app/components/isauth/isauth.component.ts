import { Component, OnInit } from '@angular/core';
import { LaravelPassportService } from 'laravel-passport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isauth',
  templateUrl: './isauth.component.html',
  styleUrls: ['./isauth.component.scss'],
})
export class IsauthComponent implements OnInit {
  
  constructor(
    private router : Router,
    private laravelPassportService : LaravelPassportService
  ) { 
    const isLoggedIn =  this.laravelPassportService.isUserLoggedIn();
    //console.log("Hay Login: "+isLoggedIn);
    if (!isLoggedIn){
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {}

}
