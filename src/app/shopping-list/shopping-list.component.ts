import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredientes();
    this.slService.ingredientsChanged.
    subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }


}
