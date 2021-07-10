import { Component } from '@angular/core';
import { RecipeService } from 'src/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public recipes: any = [];

  constructor(private _recipeService : RecipeService){}

  getData(value: string){
    this._recipeService.getRecipes(value).subscribe(
      data => {
        this.recipes = data.hits 
        console.log(data.hits);      
      }
    );
    
  }
}
