import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../service/login/login.service';
import { RegisterService } from '../service/register/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router:Router,private registerService:RegisterService) { }

 
  // @Output() isLoggedIn = new EventEmitter<boolean>();

  formName:string="Login Form";
  isLoginForm:boolean=true;
  buttonName:string="Login";
  isSuccessful:boolean=false;
  
  

  ngOnInit(): void {
  }

  goToRegister(){
    this.formName="Registration Form"
    this.isLoginForm=false;
    this.buttonName="Register";
  }
  // isUserLoggedIn() {
  //     this.isLoggedIn.emit(true);
  // }

  login(loginData:any) {

      console.info("In login form");
      this.loginService.login(loginData.value).subscribe(
        (response:any) => {
          // this.isUserLoggedIn();
          localStorage.setItem("token",response.token)
          console.info(response)
          if(response.role=="ADMIN") {
            this.router.navigate(['/generate']);
          }
          else {
            this.router.navigate(['/not-authorized']);
          }
          
        }
      )
    
      
  }

}
