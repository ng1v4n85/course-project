import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://www.sunoko.rs/recepti/wp-content/uploads/sites/3/shutterstock_515513989-400x350.jpg'),
        new Recipe('Another Test Recipe', 'This is a test', 'https://www.sunoko.rs/recepti/wp-content/uploads/sites/3/shutterstock_515513989-400x350.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}