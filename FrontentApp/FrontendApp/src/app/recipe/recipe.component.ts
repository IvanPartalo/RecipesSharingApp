import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription, elementAt } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Search } from '../model/search.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = []
  userSub: Subscription = new Subscription()
  isAdmin: boolean = false
  isUser: boolean = false
  recipeName: string = ""
  ingredient: string = "All"
  ingredients: string[] = []
  constructor(private recipeService: RecipeService, private authService: AuthService){}
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((responseData : Recipe[]) =>{
      this.recipes = responseData;
      this.FillIngredientsList()
    });
    this.userSub = this.authService.user.subscribe({
      next: (data) => {
         if(data?.userRoles.at(0) == 'Admin'){
          this.isAdmin = true
        }else if(data?.userRoles.at(0) == 'User'){
          this.isUser = true
          setTimeout(() => {
            this.CheckIfUserBookMarked()  
          }, 300);
        }
      }
    })
    
  }
  CheckIfUserBookMarked(){
    let username = localStorage.getItem('username')
    this.recipes.forEach(element => {
      console.log(element)
      element.usersWhoBookmarked.forEach(user => {
        if(user == username){
          element.bookmarked = true
        }
      })
    });
  }
  FillIngredientsList(){
    this.ingredients.push("All")
    this.recipes.forEach(element =>{
      element.ingredients.forEach(i => {
        if(!this.ingredients.includes(i.name)){
          this.ingredients.push(i.name)
        }
      })
    })
  }
  Delete(id: number){
    this.recipeService.deleteRecipeByAdmin(id).subscribe({
      next:(data)=>{
        this.recipes = this.recipes.filter(r => r.id != id)
      },
      error:(data) => {
        alert('could not delete the recipe')
      }
    })
  }
  Bookmark(recipe: Recipe){
    this.recipeService.bookMarkRecipe(recipe.id).subscribe({
      next:(data)=>{
        recipe.bookmarked = true
      }
    })
  }
  SearchRecipes(){
    let searchData: Search = new Search(this.recipeName, this.ingredient)
    console.log(searchData)
    this.recipeService.getSearchedRecipes(searchData).subscribe((responseData : Recipe[]) =>{
      this.recipes = responseData;
      if(this.isUser){
      this.CheckIfUserBookMarked()
      }
    });
  }
  Reset(){
    this.recipeName = ""
    this.ingredient = "All"
    this.recipeService.getRecipes().subscribe((responseData : Recipe[]) =>{
      this.recipes = responseData;
      if(this.isUser){
        this.CheckIfUserBookMarked()
      }
    });
  }
}
