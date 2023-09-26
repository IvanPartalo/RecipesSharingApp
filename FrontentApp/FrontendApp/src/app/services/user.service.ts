import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { CookRow } from '../model/cook-row.model';
import { Cook } from '../model/cook.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  cooks: CookRow[] = []
  constructor(private http: HttpClient) { }
    
  getCooks() : Observable<CookRow[]> {
    this.cooks = []
    var url = 'http://localhost:5240/api/User/allcooks';
    return this.http.get<CookRow[]>(url).pipe(
      map(response => {
        response.forEach(element => {
             this.cooks.push(new CookRow(element.username, element.firstName, element.lastName, element.numberOfRecipes))
        });
        return this.cooks
      }),
    );
  }
  getCook(username: string) : Observable<Cook> {
    this.cooks = []
    var url = 'http://localhost:5240/api/User/cooks';
    return this.http.get<Cook>(url,{
        params: new HttpParams().set("username", username)
      }).pipe(
      map(response => {
        return new Cook(response.username, response.firstName, response.lastName, response.recipes)
      }),
    );
  }
  getLogedInCook() : Observable<Cook> {
    this.cooks = []
    var url = 'http://localhost:5240/api/User/currentcook';
    return this.http.get<Cook>(url).pipe(
      map(response => {
        return new Cook(response.username, response.firstName, response.lastName, response.recipes)
      }),
    );
  }
}