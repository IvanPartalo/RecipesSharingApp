import { Ingredient } from "./ingredient.model";

export class Recipe {
    id: number;
    name: string;
    preparationDescription: string;
    ingredients: Ingredient[]
    usersWhoBookmarked: string[]
    bookmarked: boolean
    constructor(id: number, name: string, preparationDescription: string, ingredients: Ingredient[], usersWhoBookmarked: string[]) {
        this.id = id
        this.name = name
        this.preparationDescription = preparationDescription
        this.ingredients = ingredients
        this.bookmarked = false
        this.usersWhoBookmarked = usersWhoBookmarked
    }
}