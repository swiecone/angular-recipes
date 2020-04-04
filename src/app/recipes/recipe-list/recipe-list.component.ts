import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      // tslint:disable-next-line: max-line-length
      new Recipe('Shawarma', 'this is a delicious shawarma dish lorem itsum lorem itsum lorem itsum lorem itsum lorem itsum lorem itsum ',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
      new Recipe('Falafel', 'this is a delicious falafel dish ',
      'https://t1.uc.ltmcdn.com/images/4/3/8/img_como_hacer_falafel_29834_600.jpg'),
      new Recipe('Paella', 'this is a delicious paella dish ',
      'https://dam.cocinafacil.com.mx/wp-content/uploads/2017/02/paella-mixta.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
