export class ExistingIngredientCreate {
    name: string;
    measurementUnit: string
    constructor(name: string, measurementUnit: string) {
        this.name = name
        this.measurementUnit = measurementUnit
    }
}