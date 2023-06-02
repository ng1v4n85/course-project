import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.sunoko.rs/recepti/wp-content/uploads/sites/3/shutterstock_515513989-400x350.jpg')
  ];
}
