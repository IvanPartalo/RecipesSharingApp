import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Cook } from '../model/cook.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit{
  cook: Cook = new Cook('', '', '', [])
  title: string = ''
  username: string = ''
  sub: any
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private recipeService: RecipeService){}
  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
    this.username = params ['username'];
    });
    this.getCook(this.username)
  }
  getCook(username: string){
    this.userService.getCook(username).subscribe({
      next: (data) => {
       this.cook = data
       this.title = this.cook.username
     },
     error: (errorData) =>{
        if(errorData.status==401){
          this.title = 'Unauthorized'
        }
        if(errorData.status==404){
          this.title = 'Cook not found'
        }
     }
   })
  }
  Delete(id: number){
    this.recipeService.deleteRecipe(id).subscribe({
      next:(data)=>{
        this.cook.recipes = this.cook.recipes.filter(r => r.id != id)
      },
      error:(data) => {
        alert('could not delete the recipe')
      }
    })
  }
}
