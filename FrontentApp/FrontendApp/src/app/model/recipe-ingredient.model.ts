export class RecipeIngredient {
    name: string;
    quantity: string;
    measurementUnit: string
    constructor(name: string, quantity: string, measurementUnit: string) {
        this.name = name
        this.quantity = quantity
        this.measurementUnit = measurementUnit
    }
}