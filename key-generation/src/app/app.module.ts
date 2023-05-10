import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenerateKeyComponent } from './generate-key/generate-key.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component'
import { AuthGuard } from './auth/auth.guard';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginService } from './service/login/login.service';
import { Injectable } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSelectModule} from '@angular/material/select';
import { PaginatorComponent } from './paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreatePostComponent } from './create-post/create-post.component';
import { ShowpostComponent } from './showpost/showpost.component';



@NgModule({
  declarations: [
    AppComponent,
    GenerateKeyComponent,
    CustomModalComponent,
    LoginComponent,
    RegisterComponent,
    NotAuthorizedComponent,
    PaginatorComponent,
    CreatePostComponent,
    ShowpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    NgbModule,
    MatDividerModule,
    FormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    NgSelectModule,
    MatSelectModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
