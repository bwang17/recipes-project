import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('A Test recipe', 'This is a recipe', 'https://cdn.vox-cdn.com/thumbor/Y3E0Q9Dr_TqNCfZ08T-BOHhPXEg=/cdn.vox-cdn.com/uploads/chorus_asset/file/6695159/SwiftAndSons_beefwellington2.0.jpg'),
      new Recipe('A Test recipe', 'This is a recipe', 'https://cdn.vox-cdn.com/thumbor/Y3E0Q9Dr_TqNCfZ08T-BOHhPXEg=/cdn.vox-cdn.com/uploads/chorus_asset/file/6695159/SwiftAndSons_beefwellington2.0.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
