import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  creds={};
  email:any;
  password:any;
  result:any;
  public name="jamuna";
  public myid="testId";
  public isDisabled=true;
  public displayName=false;
  public ParentData="Hey I am Parent";
  public message='';
  constructor(private loginService:LoginService,private router:Router) { }
  Login(){
    debugger;
   
     const creds= 'email=' +this.email +'&password=' +this.password;
  
    this.loginService.LoginUser(creds).subscribe(res=>{
      this.result=res.json();
      console.log(this.result);
      if(this.result.errorMessage=="SUCCESS"){
        alert("success");
        //localStorage.setItem('token', res.token);
        this.router.navigate(['dashboard']);

      }
      else{
        alert("error");
      }
     
    })
    

  }
user1(){
  return "Hello" +this.name;
}
  ngOnInit() {
  }

}
