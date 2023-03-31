import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/api/v1/auth/login";

  requestHeader = new HttpHeaders(
    {"No-Auth":"true"}
  );

  constructor(private http:HttpClient) {

  }

  login(loginData:any) {
     return this.http.post(this.url,loginData,{headers:this.requestHeader});
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
