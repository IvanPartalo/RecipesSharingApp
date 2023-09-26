import { Component } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-bookmarked-recipes',
  templateUrl: './bookmarked-recipes.component.html',
  styleUrls: ['./bookmarked-recipes.component.css']
})
export class BookmarkedRecipesComponent {
  recipes: Recipe[] = []
  isAdmin: boolean = false
  isUser: boolean = false
  constructor(private recipeService: RecipeService){}
  ngOnInit(): void {
    this.recipeService.getBookMarkedRecipes().subscribe((responseData : Recipe[]) =>{
      this.recipes = responseData;
    });
  }
}
