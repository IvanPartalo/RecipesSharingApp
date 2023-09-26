import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

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
  constructor(private recipeService: RecipeService, private authService: AuthService){}
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((responseData : Recipe[]) =>{
      this.recipes = responseData;
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
}
