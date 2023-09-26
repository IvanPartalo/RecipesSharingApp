import { Ingredient } from "./ingredient.model";

export class Recipe {
    id: number;
    name: string;
    preparationDescription: string;
    ingredients: Ingredient[]
    constructor(id: number, name: string, preparationDescription: string, ingredients: Ingredient[]) {
        this.id = id
        this.name = name
        this.preparationDescription = preparationDescription
        this.ingredients = ingredients
    }
}