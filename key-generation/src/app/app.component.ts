import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GeneratekeyService } from './service/generatekey.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { PostsService } from './posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  doSomething(isLoggedIn:boolean){
    console.info(isLoggedIn);
  }
  
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

  // openModal() {
  //   const modalRef = this.modalService.open(CustomModalComponent,
  //     {
  //       scrollable: true,
  //       windowClass: 'myCustomModalClass',
  //     });
  //   modalRef.result.then((result:any) => {
  //     console.log(result);
  //   }, (reason:any) => {
  //   });
  // }



