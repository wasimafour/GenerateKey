import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

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

}
