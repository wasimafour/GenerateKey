import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { GeneratekeyService } from '../service/generatekey.service';
import { MatTableDataSource } from '@angular/material/table';

interface PeriodicElement {
  id: number
  appName: string;
  appId: string;
  appKey: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent implements OnInit {

  todayDate:Date = new Date(Date.now() + ( 3600 * 1000 * 24));
  
  ELEMENT_DATA: PeriodicElement[]=[
    // {id: 1, appId: 'Hydrogen', appName:".0079", validTill: 'H'},
  ];
 
  displayedColumns: string[] = ['id','app_id', 'app_name', 'api_key'];
  //  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  dataSource: MatTableDataSource<PeriodicElement>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    },100)

    
      
    
    console.info("ngAfterViewInit");
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
  

  categories = [
    {name:'Workspace'},
    // {name:'Storage', disabled: true}
    {name:'Storage'}
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
    
  constructor(private generate: GeneratekeyService,public modalService: NgbModal,private route:Router) {

    this.generate.getKeys().then(data => {
      this.ELEMENT_DATA = data;
      console.info(this.ELEMENT_DATA);
    })
    // var res:any = this.generate.getKeys().toPromise();
    // res.data.map(item => {
    //   this.ELEMENT_DATA.push(item);
    // })

     
  }
  
  generateBtn() {
    
    this.route.navigate(['/generate'])
  }

  
    async ngOnInit() {

      // var result:any = await this.generate.getKeys().then(data => {
      //   this.ELEMENT_DATA.push(data);
      // })
    //   result.map(item => {
    //   this.ELEMENT_DATA.push(item);
    // })
    // console.info(result);
    // console.info(this.ELEMENT_DATA);
    // this.generate.getKeys().then(data => {
    //   this.ELEMENT_DATA = data;
    //   console.info(this.ELEMENT_DATA);
    // })
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      

    var res:any =  await this.generate.getEmails('afour-pune-campus@afourtech.com').toPromise();

    res.data.map(item => {
        this.names.push(item.name);
        this.emails.push(item.email);
    });

   
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

  //   getKeys(){
  //   this.generate.getKeys().subscribe((response : PeriodicElement)=> {
  //     console.info(response);
  //     this.ELEMENT_DATA.push(response);
  //   })
  //  }

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
