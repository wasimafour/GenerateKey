import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  login(loginData:any) {
    console.info("In login form");
    this.loginService.login(loginData.value).subscribe(
      (response:any) => {

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
