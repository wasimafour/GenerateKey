import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  formData:any = new FormData();
  
  // headers = new HttpHeaders({
  //   'Content-Type': 'multipart/form-data'
  // });
  // options = { headers: this.headers };

  
  uploadFile(formData)  {
    return this.http.post("http://localhost:8080/api/v1/savePost",formData);
  }
}
