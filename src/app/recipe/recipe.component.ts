import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  
  @Input() title : string = "";
  @Input() calories: string = "";
  @Input() ingredients: any = [];
  @Input() imageUrl: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  
}
