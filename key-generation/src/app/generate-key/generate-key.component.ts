import {Component} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GeneratekeyService } from '../service/generatekey.service'
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';


/** @title Form field appearance variants */
@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.css']
})

export class GenerateKeyComponent {

  generateKeyForm: FormGroup = new FormGroup({
    appName: new FormControl(''),
    appId: new FormControl(''),
    validTill: new FormControl(''),
    ownerName : new FormControl(),
    ownerEmails: new FormControl()
  });

  generatedKey: any;
  
  constructor(private generate: GeneratekeyService,public modalService: NgbModal) {

  }

  ngOnInit() {

  }

  async generateKey() {
    //var response:any = await this.generate.generateKey(this.generateKeyForm.value).toPromise()

    // this.generatedKey = {
    //       "key": response.data.generatedKey,
    //       "appName": this.generateKeyForm.controls.appName.value,
    //       "appId": this.generateKeyForm.controls.appId.value,
    //       "validTill": this.generateKeyForm.controls.validTill.value.toISOString(),
    //       "ownerName": this.generateKeyForm.controls.ownerName.value,
    //       "ownerEmails": this.generateKeyForm.controls.ownerEmails.value,
    //     }
    // .subscribe((response:any) => {
    //   console.info(response.data.generatedKey);
      this.generatedKey = {
        "key": "key",
        "appName": this.generateKeyForm.controls.appName.value,
        "appId": this.generateKeyForm.controls.appId.value,
        "validTill": this.generateKeyForm.controls.validTill.value.toISOString(),
        "ownerName": this.generateKeyForm.controls.ownerName.value,
        "ownerEmails": this.generateKeyForm.controls.ownerEmails.value,
      }
    // })

    const modalRef = this.modalService.open(CustomModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',

      });
      modalRef.componentInstance.formData = this.generatedKey
    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });

  }
}
