// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Router } from "@angular/router";
// import { Observable, throwError } from "rxjs";
// import {catchError} from "rxjs/operators";
// import { LoginService } from "../service/login/login.service";

// export class AuthInterceptor implements HttpInterceptor {

//     constructor(private loginService: LoginService,private router:Router){

//     }
//      intercept(
//             req: HttpRequest<any>, 
//             next: HttpHandler): Observable<HttpEvent<any>> {
//             if(req.headers.get("No-Auth")=='true') {
//                 return next.handle(req.clone());
//             }
            
//             const token = this.loginService.getToken();
//             req = this.addToken(req,token);

//             return next.handle(req).pipe(
//                 catchError(
//                     (err:HttpErrorResponse) => {
//                         console.log(err.status);
//                         if(err.status === 200) {
//                             this.router.navigate(['/generate'])
//                         }
//                         return throwError("Something went wrong");
//                     }
//                 )
//             );
//         }

//         private addToken(request:HttpRequest<any>, token:string | null) {
//             return request.clone(
//                 {
//                     setHeaders: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             )
//         };

        
// }
   