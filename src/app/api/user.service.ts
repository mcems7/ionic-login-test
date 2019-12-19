import { Injectable } from '@angular/core';
import * as Constants from '../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LaravelPassportService } from 'laravel-passport';
import { tap, map } from 'rxjs/operators';
//import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    //private router: Router,
    private laravelPassportService : LaravelPassportService
  ) { }
  logout() {
    this.laravelPassportService.logout();
    const isLoggedInlogout =  this.laravelPassportService.isUserLoggedIn();
    if (isLoggedInlogout){
      return false;
    }else{
      return true;
    }
  }
  new_user(body){
    const url = Constants.API_ENDPOINT+"/api/v1/auth/signup";
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    headers = headers.set("X-Requested-With","XMLHttpRequest");
    headers = headers.set("Access-Control-Allow-Origin", "*");
    //this.presentAlert(JSON.stringify(headers));
    return this.http.post(url, body, {headers: headers});
  }
  
  current_user(){
    const token =  this.laravelPassportService.getTokenType()+" "+ this.laravelPassportService.getAccessToken();
    //console.log(token);
    const url = Constants.API_ENDPOINT+"/api/v1/auth/user";
    const body = JSON.stringify({});
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      headers = headers.set("X-Requested-With","XMLHttpRequest");
      headers = headers.set("Access-Control-Allow-Origin", "*");
      headers = headers.set("Authorization", token);
      return this.http.post(url, body, {headers: headers});
  }
  update_current_user(body){
    const url = Constants.API_ENDPOINT+"/api/v1/auth/update_current_user";
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    headers = headers.set("X-Requested-With","XMLHttpRequest");
    headers = headers.set("Access-Control-Allow-Origin", "*");
    const token =  this.laravelPassportService.getTokenType()+" "+ this.laravelPassportService.getAccessToken();
    headers = headers.set("Authorization", token);
    //this.presentAlert(JSON.stringify(headers));
    return this.http.post(url, body, {headers: headers});
  }
  new_address(body){
    const url = Constants.API_ENDPOINT+"/api/v1/auth/new_address";
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    headers = headers.set("X-Requested-With","XMLHttpRequest");
    headers = headers.set("Access-Control-Allow-Origin", "*");
    const token =  this.laravelPassportService.getTokenType()+" "+ this.laravelPassportService.getAccessToken();
    headers = headers.set("Authorization", token);
    //this.presentAlert(JSON.stringify(headers));
    return this.http.post(url, body, {headers: headers});
  }
  delete_address(body){
    const url = Constants.API_ENDPOINT+"/api/v1/auth/delete_address";
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    headers = headers.set("X-Requested-With","XMLHttpRequest");
    headers = headers.set("Access-Control-Allow-Origin", "*");
    const token =  this.laravelPassportService.getTokenType()+" "+ this.laravelPassportService.getAccessToken();
    headers = headers.set("Authorization", token);
    //this.presentAlert(JSON.stringify(headers));
    return this.http.post(url, body, {headers: headers});
  }
  get_addresses(){
    const token =  this.laravelPassportService.getTokenType()+" "+ this.laravelPassportService.getAccessToken();
    //console.log(token);
    const url = Constants.API_ENDPOINT+"/api/v1/auth/get_addresses";
    const body = JSON.stringify({});
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      headers = headers.set("X-Requested-With","XMLHttpRequest");
      headers = headers.set("Access-Control-Allow-Origin", "*");
      headers = headers.set("Authorization", token);
      return this.http.post(url, body, {headers: headers});
      /*
      .pipe( 
        tap (data => {
                console.log(data);
                return  data;
            })
          )
          */
  }
  get_users(){
    const token =  this.laravelPassportService.getTokenType()+" "+ this.laravelPassportService.getAccessToken();
    //console.log(token);
    const url = Constants.API_ENDPOINT+"/api/v1/users";
    const body = JSON.stringify({});
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      headers = headers.set("X-Requested-With","XMLHttpRequest");
      headers = headers.set("Access-Control-Allow-Origin", "*");
      headers = headers.set("Authorization", token);
      return this.http.post(url, body, {headers: headers});
  }
}
