import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {

  title='pagination';
  POSTS:any;
  page:number=1;
  count:number=0;
  tableSize:number=10;
  tableSizes:any=[5,10,15,20];
  isButtonVisible:boolean=true;

  constructor(private postService:PostsService,private router:Router){}

  ngOnInit():void {
    this.postLists();
  }

  postLists(): void{
    this.postService.getAllPosts().subscribe((response) => {
      console.info(response);
      this.POSTS = response;
    })
  }

  onTableDataChange(event:any) {
    console.info(event);
    this.page=event;
    this.postLists();
  }

  onTableSizeChange(event:any) {
    this.tableSize = event.target.value;
    this.page=1;
    this.postLists();
  }

  createPost() {
    console.info("in create post");
    this.isButtonVisible=false;
    this.router.navigate(['/createpost']);
  }


}
