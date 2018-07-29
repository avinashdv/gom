import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public currentBook;

  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService) { 
    console.log("Book constructor called");
  }

  ngOnInit() {
    let bookId = this._route.snapshot.paramMap.get('bookId');
    //this.currentBook = this.gotHttpService.getCurrentBook(bookId);
    //console.log(this.currentBook);
    this.gotHttpService.getCurrentBook(bookId).subscribe(
      data => {
        console.log(data);
        this.currentBook = data;
        console.log(this.currentBook);
        console.log(this.currentBook.authors);
        
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

}
