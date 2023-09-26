import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../model/registeruser.model';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  registerCook(user: RegisterUser) : Observable<any> {
    var url = 'http://localhost:5240/api/Auth/register-cook';
    return this.http.post<any>(url, user).pipe(
      map(response => {
        return true
      })
    )
  }
  registerUser(user: RegisterUser) : Observable<any> {
    var url = 'http://localhost:5240/api/Auth/register-user';
    return this.http.post<any>(url, user).pipe(
      map(response => {
        return true
      })
    )
  }
}
