import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:Http,private router:Router) { }
  LoginUser(creds){
   let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post("http://192.168.1.189:8082/Ticket/rest/user/authenticate",creds,{ headers:headers});

  }
  loggedIn(){
    return !!localStorage.getItem('token');  
  }
  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
