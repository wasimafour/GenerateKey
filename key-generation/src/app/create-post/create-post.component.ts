import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UploadService } from '../upload/upload.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  

  fileName='';
  file:File;
  abc:any={
    title:'abc'
  }
  //posts:any;
  
  
  constructor(private http: HttpClient,private uploadService:UploadService) { }

  createPostForm: FormGroup = new FormGroup({
    id: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
  });

  ngOnInit(): void {
  }

  get appName(){
    return this.createPostForm.get('id');
  }

  get appId(){
    return this.createPostForm.get('title');
  }

  
  onFileSelected(event) {

    //const file:File = event.target.files[0];

    this.file = event.target.files[0];
    if (this.file) {

        this.fileName = this.file.name;

        // const formData = new FormData();

        // formData.append("thumbnail", file);

        // const upload$ = this.http.post("http://localhost:8080/api/v1/upload", formData);

        // upload$.subscribe();
    }
}



uploadFile() {
    // console.info(this.file);
    // console.info(this.fileName);
    const formData = new FormData();
    // const data = JSON.stringify({
    //   title: 'abc',
    // })
  //   const dto_object = new Blob([JSON.stringify({
  //     title: this.createPostForm.get('title'),
  // })], {
  //  type: 'application/json'
  // })
       
    const title:any = this.createPostForm.get('title');
    formData.append("file", this.file);
    //formData.append("posts",{"title":"abc"});
    formData.append("title","test");
  //   for (var pair of formData.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]); 
  // }
    //console.log(...formData)
    this.uploadService.uploadFile(formData).subscribe(response => {
      console.info(response);
    })  
    // const upload$ = this.http.post("http://localhost:8080/api/v1/upload", formData);

    // upload$.subscribe();

    ;
}


}
