import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeneratekeyService {

  url = "http://10.65.0.81:8443/apis/v1/admin/api-keys"
  // headers = new HttpHeaders({
  //   'accept': 'application/json',
  //   'X-API-KEY': '20c84287-cb7b-4892-9dc6-2c66b676d0fc',
  //   'X-APP-ID': 'ADMIN',
  //   'Content-Type': 'application/json'
  //  });
  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'accept': 'application/json',
    'Content-Type': 'application/json'
   });
  options = { headers: this.headers };
  formData : any;

  constructor(private http: HttpClient) {}

  generateKey(data:any) {

    return this.http.post("http://localhost:8080/api/v1/generate",data,this.options);
  //   const date = new Date(data.validTill);  
 
  //   this.formData = {
  //   "appName": data.appName,
  //   "appId": data.appId,
  //   "validTill": date.toISOString(),
  //   "ownerEmails": [
  //     data.ownerEmails
  //   ]
  // }
    
  //   return this.http.post(this.url,this.formData,this.options);
   }
}


