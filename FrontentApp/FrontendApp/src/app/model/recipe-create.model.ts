import { RecipeIngredient } from "./recipe-ingredient.model";

export class RecipeCreate {
    name: string;
    preparationDescription: string;
    ingredients: RecipeIngredient[]
    constructor(name: string, preparationDescription: string, ingredients: RecipeIngredient[]) {
        this.name = name
        this.preparationDescription = preparationDescription
        this.ingredients = ingredients
    }
}