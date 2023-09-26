import { Recipe } from "./recipe.model";

export class Cook {
    username: string;
    firstName: string;
    lastName: string;
    recipes: Recipe[];
    constructor(username: string, firstName:string, lastName:string, recipes:Recipe[]) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.recipes = recipes;
    }
}