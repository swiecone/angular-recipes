import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe(
      'Shawarma',
      'this is a delicious shawarma dish lorem itsum lorem itsum lorem itsum lorem itsum lorem itsum lorem itsum ',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
   [ new Ingredient('meat', 1),
    new Ingredient('cheese', 4),
    new Ingredient('bread', 10)]
    ),
    new Recipe('Falafel', 'this is a delicious falafel dish ',
    'https://t1.uc.ltmcdn.com/images/4/3/8/img_como_hacer_falafel_29834_600.jpg',
   [ new Ingredient('chickpea', 1),
    new Ingredient('garlic', 4),
    new Ingredient('tahhin', 10)]
    ),
    new Recipe('Paella', 'this is a delicious paella dish ',
    'https://dam.cocinafacil.com.mx/wp-content/uploads/2017/02/paella-mixta.jpg',
   [ new Ingredient('rice', 1),
    new Ingredient('saffron', 4),
    new Ingredient('chicken', 10)]
    ),
    new Recipe('Gazpacho', 'this is a delicious paella dish ',
    'https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/59257de35cafe855f63c9869/gazpachoandaluz_0.jpg',
    [new Ingredient('tomato', 1),
    new Ingredient('garlic', 4),
    new Ingredient('pepper', 10)]
    )
];

getRecipes() {
  return this.recipes.slice();
}

}
