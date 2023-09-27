import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './recipe/recipe.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { IngredientComponent } from './ingredient/ingredient.component';
import {MatTableModule} from '@angular/material/table';
import { CooksComponent } from './cooks/cooks.component';
import { CookComponent } from './cook/cook.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { BookmarkedRecipesComponent } from './bookmarked-recipes/bookmarked-recipes.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'register/:userTypeToRegister', component: RegisterComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'recipes', component: RecipeComponent, pathMatch: 'full'},
  { path: 'ingredients', component: IngredientComponent, pathMatch: 'full'},
  { path: 'cooks', component: CooksComponent, pathMatch: 'full'},
  { path: 'cook/:username', component: CookComponent, pathMatch: 'full'},
  { path: 'addrecipe', component: AddRecipeComponent, pathMatch: 'full'},
  { path: 'bookmarkedrecipes', component: BookmarkedRecipesComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecipeComponent,
    IngredientComponent,
    CooksComponent,
    CookComponent,
    AddRecipeComponent,
    BookmarkedRecipesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
