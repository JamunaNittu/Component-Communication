import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { LoginService } from './login/login.service';


@Injectable({
  providedIn: 'root'
})
export class CanauthService implements CanActivate{

  constructor(private router:Router,private loginService:LoginService ) { }
  canActivate():boolean{
    if(this.loginService.loggedIn()){
      console.log('true')
      return true
    } else {
      console.log('false')            
      this.router.navigate(['login'])
      return false
    }
    }
}
