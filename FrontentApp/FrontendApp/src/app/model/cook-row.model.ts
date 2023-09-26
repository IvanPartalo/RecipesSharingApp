export class CookRow {
    username: string;
    firstName: string;
    lastName: string;
    numberOfRecipes: number;
    constructor(username: string, firstName:string, lastName:string, numberOfRecipes:number) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.numberOfRecipes = numberOfRecipes;
    }
}