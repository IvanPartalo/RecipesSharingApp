import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { RecipeCreate } from '../model/recipe-create.model';

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
             this.recipes.push(new Recipe(element.id, element.name, element.preparationDescription, element.ingredients, element.usersWhoBookmarked))
        });
        return this.recipes
      }),
    );
  }
  getBookMarkedRecipes() : Observable<Recipe[]> {
    this.recipes = []
    var url = 'http://localhost:5240/api/User/bookmark';
    return this.http.get<Recipe[]>(url).pipe(
      map(response => {
        response.forEach(element => {
             this.recipes.push(new Recipe(element.id, element.name, element.preparationDescription, element.ingredients, element.usersWhoBookmarked))
        });
        return this.recipes
      }),
    );
  }
  bookMarkRecipe(recipeId: number) : Observable<boolean> {
    this.recipes = []
    var url = 'http://localhost:5240/api/User/bookmark';
    return this.http.post<boolean>(url, null, {
      params: new HttpParams().set("recipeId", recipeId)
    }).pipe(
      map(response => {
        return true;
      }),
    );
  }
  addRecipe(recipe: RecipeCreate) : Observable<boolean> {
    this.recipes = []
    var url = 'http://localhost:5240/api/Recipe';
    return this.http.post<boolean>(url, recipe).pipe(
      map(response => {
        return true
      }),
    );
  }
  deleteRecipeByAdmin(id: number) : Observable<boolean> {
    var url = 'http://localhost:5240/api/Recipe/admindelete';
    return this.http.delete<boolean>(url, {
        params: new HttpParams().set("id", id)
      }).pipe(
      map(response => {
        return true
      }),
    );
  }
  deleteRecipe(id: number) : Observable<boolean> {
    var url = 'http://localhost:5240/api/Recipe';
    return this.http.delete<boolean>(url, {
        params: new HttpParams().set("id", id)
      }).pipe(
      map(response => {
        return true
      }),
    );
  }
}