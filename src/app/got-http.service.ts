import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable({
  providedIn: 'root'
})
export class GotHttpService {

  public baseUrl = "https://anapioficeandfire.com/api";

  constructor(private _http: HttpClient) {
    console.log("Got Http Service constructor called");
  }

  public getBooks(): any {
    let booksResponse = this._http.get(`${this.baseUrl}/books`);
    console.log(booksResponse);
    return booksResponse;
  }

  public getCurrentBook(bookId): any{
    let currentBook = this._http.get(`${this.baseUrl}/books/${bookId}`);
    return currentBook;
  }

  public getCharacters(): any {
    let charactersResponse = this._http.get(`${this.baseUrl}/characters`);
    console.log(charactersResponse);
    return charactersResponse;
  }

  public getCurrentCharacter(characterId): any{
    let currentCharacter = this._http.get(`${this.baseUrl}/characters/${characterId}`);
    return currentCharacter;
  }

  public getHouses(): any {
    let housesResponse = this._http.get(`${this.baseUrl}/houses`);
    console.log(housesResponse);
    return housesResponse;
  }

  public getCurrentHouse(houseId): any {
    let currentHouse = this._http.get(`${this.baseUrl}/houses/${houseId}`);
    return currentHouse;
  }
}
