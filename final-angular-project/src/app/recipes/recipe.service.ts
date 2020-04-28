import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe(
            'Tasy Schnitzel',
            'A super-tasty Schnitzel - just awesome', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Frieds', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else do you need on the burger', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Topping', 2)
            ])
      ];

      constructor(private slService: ShoppingListService){}
     
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }



}