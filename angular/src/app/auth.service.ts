import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { User } from './user';
import { Observable, Subject } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  user: User;
  admin: boolean = false;
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Promise<User> {
    return this.http.post<User>('http://localhost:4200/api/user/login', user, httpOptions).pipe(
      tap((res: User) => {
        console.log('service login', res);
        this.isLoggedIn = true;
        this.user = res;
        if(this.user.role == 'ADMIN'){
          this.admin = true;
        }else{
          this.admin = false;
        }
      })
    ).toPromise();
  }

  activeUser(): Observable<string> {
    return this.http.post<string>(`http://localhost:4200/api/user/activeInUser`,  httpOptions);
  
  
  }

  logout() {
    // https://stackoverflow.com/a/46816238
    return this.http.post('api/user/logout', {}, httpOptions).pipe(
      tap(res => {
        console.log('service logout', res);
        this.isLoggedIn = false;
        this.user = new User();
      })
    ).toPromise();
  }

 register(user: User): Promise<User>{
   this.user=new User();
    return this.http.post<User>('http://localhost:4200/api/user/register', user, httpOptions).pipe(
      tap((res: User) =>{
        console.log('service register', res);
        this.isLoggedIn = true;
        
      })
    
     
    ).toPromise();
  }
 
  


   
}