import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GeneratekeyService } from './service/generatekey.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  doSomething(isLoggedIn:boolean){
    console.info(isLoggedIn);
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



