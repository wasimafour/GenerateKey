import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeneratekeyService {

  //url = "http://10.65.0.81:8443/apis/v1/admin/api-keys"
  url = "http://localhost:8080/generate";

  //urlEmail = "http://10.65.0.81:8443/apis/v1/groups/RMS/members";

  headers = new HttpHeaders({
    'accept': 'application/json',
    //'X-API-KEY': '20c84287-cb7b-4892-9dc6-2c66b676d0fc',
    //'X-APP-ID': 'ADMIN',
    'Content-Type': 'application/json'
  });
  // headers = new HttpHeaders({
  //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //   'accept': 'application/json',
  //   'Content-Type': 'application/json'
  //  });
  options = { headers: this.headers };
  formData: any;

  urlWorkspace = "http://localhost:8080/getWorkspaceKeys"
  urlStorage = "http://localhost:8080/getStorageKeys"
  constructor(private http: HttpClient) { }

  
  getKeysWorkspace() :Promise<any> {
    return this.http.get(this.urlWorkspace).toPromise(); 
  }

  getKeysStorage() :Promise<any> {
    return this.http.get(this.urlStorage).toPromise(); 
  }

  service:string[];
  generateKey(data: any,selected:any) {
    this.service = selected
    //return this.http.post("http://localhost:8080/api/v1/generate",data,this.options);
    const date = new Date(data.validTill);
    console.info(selected);


    this.formData = {
      "appName": data.appName,
      "appId": data.appId,
      "validTill": date.toISOString(),
      ownerName:data.ownerName,
      "ownerEmails": [
        data.ownerEmails
      ],
      selectedService:[
        this.service
      ]
    }

    console.info(this.formData);

    return this.http.post(this.url, this.formData, this.options);
  }

  headers1 = new HttpHeaders({
    'accept': 'application/json',
    'X-API-KEY': '0a6b0118-8d90-4860-b30c-ed14d4841dd6',
    'X-APP-ID': 'RMS',
    'Content-Type': 'application/json'
  });

  options1 = { headers: this.headers1 };

  getEmails(groupKey: string) {

    // let promise = new Promise<void>((resolve,reject)=> {
    //   let urlEmail = `http://10.65.0.81:8443/apis/v1/groups/` + `${groupKey}` + `/members`;
    //   this.http.get(urlEmail,this.options1)
    //   .toPromise()
    //   .then(
    //     res => { // Success
    //       console.log(res);
    //       resolve();
    //       //resolve(urlEmail);
    //     }
    //   )
    // })
    // return promise;
    const urlEmail = `http://10.65.0.81:8443/apis/v1/groups/` + `${groupKey}` + `/members`;
    console.info(urlEmail);
    return this.http.get(urlEmail,this.options1);
  }
}


