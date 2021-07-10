import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private APP_ID = '86f93c53';
  private APP_KEY = "e8d155758e9b8fb4c8bef7fd3fbd1fe2";

  private _url = "";
  constructor(private _http: HttpClient) { }

  getRecipes(searchQuery: string): Observable<any>{

    this._url = `https://api.edamam.com/search?q=${searchQuery}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`;
    return this._http.get(this._url);
  }
}
