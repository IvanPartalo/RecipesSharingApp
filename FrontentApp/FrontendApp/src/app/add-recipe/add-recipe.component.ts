import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { ExistingIngredient } from '../model/existing-ingredient.model';
import { RecipeIngredient } from '../model/recipe-ingredient.model';
import { RecipeCreate } from '../model/recipe-create.model';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  ingredients: ExistingIngredient[] = []
  recipeIngredients: RecipeIngredient[] = []
  displayedColumns: string[] = ['name', 'unit', 'add'];
  recipeName: string=''
  preparationDescription: string=''
  constructor(private ingredientService: IngredientService, private recipeService: RecipeService, private router: Router){}
  ngOnInit(): void {
    this.getIngredients()
  }
  getIngredients(){
    this.ingredientService.getExistingIngredients().subscribe((responseData : ExistingIngredient[]) =>{
      this.ingredients = responseData;
    });
  }
  addIngredient(ingredient: ExistingIngredient){
    let add: boolean
    add = true
    this.recipeIngredients.forEach(element =>{
      if(element.name == ingredient.name){
        add = false
      }
    })
    if(add){
    this.recipeIngredients.push(new RecipeIngredient(ingredient.name, '0', ingredient.measurementUnit))
    }
  }
  removeIngredient(ingredient: RecipeIngredient){
    const index = this.recipeIngredients.indexOf(ingredient)
    if(index > -1){
      this.recipeIngredients.splice(index, 1)
    }
  }
  submitRecipe(){
    let recipe: RecipeCreate = new RecipeCreate(this.recipeName, this.preparationDescription, this.recipeIngredients)
    this.recipeService.addRecipe(recipe).subscribe({
      next:(data)=>{
        this.router.navigate(['/cook', '']);
      },
      error:(data) => {
        alert('could not create the recipe')
      }
    })
  }
}
