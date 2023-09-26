import { Component, OnInit } from '@angular/core';
import { ExistingIngredient } from '../model/existing-ingredient.model';
import { IngredientService } from '../services/ingredient.service';
import { ExistingIngredientCreate } from '../model/existing-ingredient-create.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit{
  displayedColumns: string[] = ['name', 'unit', 'action'];
  ingredients: ExistingIngredient[] = []
  isAddIngredient: boolean = false
  name: string = ""
  unit: string = "gram"
  constructor(private ingredientService: IngredientService){}
  ngOnInit(): void {
    this.getIngredients()
  }
  getIngredients(){
    this.ingredientService.getExistingIngredients().subscribe((responseData : ExistingIngredient[]) =>{
      this.ingredients = responseData;
    });
  }
  toggleAddIngredient() {  
    this.isAddIngredient = !this.isAddIngredient;
  }
  Delete(id: number){
    this.ingredientService.DeleteIngredient(id).subscribe({

    })
    this.ingredients = this.ingredients.filter(i => i.id != id)
  }
  AddIngredient(){
    let ingredient: ExistingIngredientCreate = new ExistingIngredientCreate(this.name, this.unit)
    this.ingredientService.AddNewIngredient(ingredient).subscribe({

    })
    this.toggleAddIngredient()
    this.getIngredients()
    setTimeout(() => {
      this.getIngredients()
    }, 500);
  }
}
