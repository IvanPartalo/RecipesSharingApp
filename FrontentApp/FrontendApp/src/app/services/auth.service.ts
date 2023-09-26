import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { CurrentUser } from '../model/currentuser.model';
import { Router } from '@angular/router';

export interface AuthResponse {
  token: string, 
  expiration: string,
  userRoles: []
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl: string = 'http://localhost:5240/api/Auth/login';
  user: BehaviorSubject<CurrentUser | null> = new BehaviorSubject<CurrentUser | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  login(inputData: {username: string, password:string}) {
    return this.http.post<AuthResponse>(this.rootUrl, inputData).pipe(tap((data) => {
      let user = new CurrentUser(data.token, data.expiration, data.userRoles);
      this.user.next(user);
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('username', inputData.username);      
    }));
  }
  logInAuto(){
    let user = localStorage.getItem('user')
    if(user){
      let userJSON : CurrentUser = JSON.parse(user)
      this.user.next(userJSON)
    }
  }
  logOut(){
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    this.user.next(null)
  }
}
