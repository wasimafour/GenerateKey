import {Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { GeneratekeyService } from '../service/generatekey.service'
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith, tap} from 'rxjs/operators';
import {MatChipsModule} from '@angular/material/chips';

interface testData {

}

interface result {
  [x: string]: any;
  id:string
  name: string,
  email: string,
  phoneNumber:string
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


  names:string[]=[];
  emails:string[]=[];
  filteredOptionsName: Observable<string[]>;
  filteredOptionsEmail: Observable<string[]>;
 
  
  generateKeyForm: FormGroup = new FormGroup({
    appName: new FormControl('',Validators.required),
    appId: new FormControl('',Validators.required),
    validTill: new FormControl('',Validators.required),
    ownerName: new FormControl('',Validators.required),
    ownerEmail: new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    // ownerEmails: new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  });

  generatedKey: any;
    
  constructor(private generate: GeneratekeyService,public modalService: NgbModal) {
   
  }

  
    async ngOnInit() {

    var res:any =  await this.generate.getEmails('afour-pune-campus@afourtech.com').toPromise();

    res.data.map(item => {
        this.names.push(item.name);
        this.emails.push(item.email);
    });

    // res.map(item => {
    //   this.names.push(item.name);
    //   this.names.push(item.email);
    // })
    

    // this.generate.getEmails('afour-pune-campus@afourtech.com').subscribe((response:any)=> {
    //   response.data.map(item => {
    //     this.emails.push(item.email);
    //     this.names.push(item.name);
    //   })
      
    // })


    this.filteredOptionsName = this.ownerName.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterName(value))
      );

      this.filteredOptionsEmail = this.ownerEmail.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterEmail(value))
      );  

    
  }


  private _filterName(value: string): string[] {
    const filterValueName = value.toLowerCase();
    return this.names.filter(name => name.toLowerCase().includes(filterValueName));
  }

  private _filterEmail(value: string): string[] {
    const filterValueEmail = value.toLowerCase();
    return this.emails.filter(email => email.toLowerCase().includes(filterValueEmail));
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

  get ownerEmail(){
    return this.generateKeyForm.get('ownerEmail');
  }

   async generateKey() {

    console.log(this.selected.map(item => {
      console.log(item);
    }));
    
    
    
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
        "ownerEmails": this.generateKeyForm.controls.ownerEmail.value,
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
