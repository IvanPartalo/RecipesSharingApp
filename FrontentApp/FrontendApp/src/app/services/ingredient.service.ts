import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { ExistingIngredient } from '../model/existing-ingredient.model';
import { ExistingIngredientCreate } from '../model/existing-ingredient-create.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  existingIngredients: ExistingIngredient[] = []
  constructor(private http: HttpClient) { }
    
  getExistingIngredients() : Observable<ExistingIngredient[]> {
    this.existingIngredients = []
    var url = 'http://localhost:5240/api/Ingredient';
    return this.http.get<ExistingIngredient[]>(url).pipe(
      map(response => {
        response.forEach(element => {
             this.existingIngredients.push(new ExistingIngredient(element.id, element.name, element.measurementUnit))
        });
        return this.existingIngredients
      }),
    );
  }
  AddNewIngredient(ingredient: ExistingIngredientCreate) : Observable<any> {
    var url = 'http://localhost:5240/api/Ingredient';
    return this.http.post<ExistingIngredient>(url, ingredient).pipe(
      map(response => {

      }),
    );
  }
  DeleteIngredient(id: number) : Observable<any> {
    var url = 'http://localhost:5240/api/Ingredient';
    return this.http.delete<any>(url, {
        params: new HttpParams().set("id", id)
      }).pipe(
      map(response => {

      }),
    );
  }
}