export class Ingredient {
    id: number;
    name: string;
    quantity: string;
    measurementUnit: string
    constructor(id: number, name: string, quantity: string, measurementUnit: string) {
        this.id = id
        this.name = name
        this.quantity = quantity
        this.measurementUnit = measurementUnit
    }
}