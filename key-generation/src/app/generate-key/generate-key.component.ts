import {Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GeneratekeyService } from '../service/generatekey.service'
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith} from 'rxjs/operators';
import {MatChipsModule} from '@angular/material/chips';

interface testData {

}

@Component({
  selector: 'app-generate-key',
  templateUrl: './generate-key.component.html',
  styleUrls: ['./generate-key.component.css']
})

export class GenerateKeyComponent {

  todayDate:Date = new Date(Date.now() + ( 3600 * 1000 * 24));
  
  categories = [
    {name:'Workspace'},
    {name:'Storage', disabled: true}
  ];
    
  selected = [
    // {id: 5, name: 'Angular'},
    // {id: 6, name: 'Vue'}
  ];

 
 
  

  
  generateKeyForm: FormGroup = new FormGroup({
    appName: new FormControl('',Validators.required),
    appId: new FormControl('',Validators.required),
    validTill: new FormControl('',Validators.required),
    ownerName : new FormControl('',Validators.required),
    ownerEmails: new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  });

  generatedKey: any;
    
  constructor(private generate: GeneratekeyService,public modalService: NgbModal) {
    
  }

  
  ngOnInit() {

  }

  get appName(){
    return this.generateKeyForm.get('appName');
  }

  get appId(){
    return this.generateKeyForm.get('appId');
  }

  get validTill(){
    return this.generateKeyForm.get('validTill');
  }

  get ownerName(){
    return this.generateKeyForm.get('ownerName');
  }

  get ownerEmails(){
    return this.generateKeyForm.get('ownerEmails');
  }

   async generateKey() {

    console.log(this.selected.map(item => {
      console.log(item);
    }));
    
    this.generate.getEmails('test').subscribe(response => {
      console.info(response);
    })
    // this.generateKeyForm.controls.validTill = this.generateKeyForm.controls.validTill.value.toISOString()
    // this.generate.generateKey(this.generateKeyForm.value).subscribe(
    //   (respone:any) => {
    //     console.info(respone);
    //   }
    // )
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
    const d = new Date(this.generateKeyForm.controls.validTill.value);
    const n = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
    console.info(n);
      this.generatedKey = {
        "key": "key",
        "appName": this.generateKeyForm.controls.appName.value,
        "appId": this.generateKeyForm.controls.appId.value,
        "validTill": n,
        "ownerName": this.generateKeyForm.controls.ownerName.value,
        "ownerEmails": this.generateKeyForm.controls.ownerEmails.value,
        "selectedServices": this.selected
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
