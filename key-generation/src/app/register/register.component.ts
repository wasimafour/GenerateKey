import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../service/register/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSuccessful:boolean=false;

  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  registerButton(registerForm:any) {
    console.info("In register");
    console.info(registerForm.value);
    this.registerService.register(registerForm.value).subscribe(
      (response:any) => {
        console.log(response);
          this.isSuccessful = true;
          setTimeout(() => {
            this.router.navigate([''])
          },500)
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
