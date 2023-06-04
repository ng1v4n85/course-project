import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.sunoko.rs/recepti/wp-content/uploads/sites/3/shutterstock_515513989-400x350.jpg'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://www.sunoko.rs/recepti/wp-content/uploads/sites/3/shutterstock_515513989-400x350.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}