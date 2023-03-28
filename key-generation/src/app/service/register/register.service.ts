import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:8080/api/v1/auth/register";

  requestHeader = new HttpHeaders(
    {"No-Auth":"true"}
  );

  constructor(private http:HttpClient) {

   }

   register(registerData:any) {
      return this.http.post(this.url,registerData,{headers:this.requestHeader});
   }
}
