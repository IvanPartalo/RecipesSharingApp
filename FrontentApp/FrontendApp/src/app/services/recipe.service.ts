import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = []
  constructor(private http: HttpClient) { }
    
  getRecipes() : Observable<Recipe[]> {
    this.recipes = []
    var url = 'http://localhost:5240/api/Recipe';
    return this.http.get<Recipe[]>(url).pipe(
      map(response => {
        response.forEach(element => {
             this.recipes.push(new Recipe(element.id, element.name, element.preparationDescription, element.ingredients))
        });
        return this.recipes
      }),
    );
  }
  deleteRecipe(id: number) : Observable<boolean> {
    var url = 'http://localhost:5240/api/Recipe/admindelete';
    return this.http.delete<boolean>(url, {
        params: new HttpParams().set("id", id)
      }).pipe(
      map(response => {
        return true
      }),
    );
  }
}