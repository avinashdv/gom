import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { FilterPipe } from './filter.pipe';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    NotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'main', component:MainComponent},
      {path:'main/book/:bookId', component:BooksComponent},
      {path:'main/character/:characterId', component:CharactersComponent},
      {path:'main/house/:houseId', component:HousesComponent},
      {path:'', redirectTo:'main', pathMatch:'full'},
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
