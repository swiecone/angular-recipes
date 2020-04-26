import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('Shawarma', 'this is a delicious shawarma dish lorem itsum lorem itsum lorem itsum lorem itsum lorem itsum lorem itsum ',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Falafel', 'this is a delicious falafel dish ',
    'https://t1.uc.ltmcdn.com/images/4/3/8/img_como_hacer_falafel_29834_600.jpg'),
    new Recipe('Paella', 'this is a delicious paella dish ',
    'https://dam.cocinafacil.com.mx/wp-content/uploads/2017/02/paella-mixta.jpg'),
    new Recipe('Gazpacho', 'this is a delicious paella dish ',
    'https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/59257de35cafe855f63c9869/gazpachoandaluz_0.jpg')
];

getRecipes() {
  return this.recipes.slice();
}

}
