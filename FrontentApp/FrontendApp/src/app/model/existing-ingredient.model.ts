export class ExistingIngredient {
    id: number;
    name: string;
    measurementUnit: string
    constructor(id: number, name: string, measurementUnit: string) {
        this.id = id
        this.name = name
        this.measurementUnit = measurementUnit
    }
}