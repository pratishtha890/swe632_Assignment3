import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
   Loginobj:any={
    username:"",
    password:""
   }
constructor (private router:Router){}
   onLogin(){
    if(this.Loginobj.username== "admin"&& this.Loginobj.password=="12345")
    {
           this.router.navigateByUrl('/landing');
    }
    else
    {
      alert('Wrong Credentials')
    }
   }
}
