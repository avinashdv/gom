import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit{

  // @ViewChild('bookBoolean') svg: ElementRef;

  public bookId:number;
  public characterId:number;
  public houseId:number;

  public array:any = [1, 2, 3];

  public data:any = [1, 2, 3];

  public bookArray:any = [];

  public houseArray:any = [];

  public characterArray:any = [];

  public gotData: any = [];
  public books: any = [];
  public characters: any = [];
  public houses: any = [];

  
  constructor(private gotHttpService: GotHttpService) {
    console.log("Main Component Constructor called");
  }

  ngOnInit() {
    console.log("Ng Oninit Called");

    // Get Books Data
    this.gotHttpService.getBooks().subscribe(
      data => {
        
        this.books = data;
        for(var i = 0; i < data.length; i++){
          this.books[i].bookId = i+1;
          //console.log(this.books[i].url);
        }
        console.log(this.books);


        // Get Characters Data
        this.gotHttpService.getHouses().subscribe(
          data => {
            
            this.houses = data;
            
            for(var j = 0; j< data.length; j++){
              //console.log(this.characters[j].name);
              this.houses[j].houseId = j+1;
            }
            console.log(this.houses);


            // Get Houses Data
            this.gotHttpService.getCharacters().subscribe(
              data => {
                
                this.characters = data;
                for(var k = 0; k < data.length; k++){
                  this.characters[k].characterId = k+1;
                }
                console.log(this.characters);


                // Adding all the books, characters and houses into gotData.
                this.gotData = [...this.books, ...this.characters, ...this.houses];
                console.log(this.gotData);
                
                
                  // Sorting the data alpahbetically.
                  this.gotData.sort(function (name1, name2) {
                    if (name1.name < name2.name) {
                      return -1;
                    } else if (name1.name > name2.name) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
              },
              error => {
                console.log(error.errorMessage);
              }
            )
          },
          error => {
            console.log(error.errorMessage);
          }
        )
      },
      error => {
        console.log(error.errorMessage);
      }
    ) 
  };
}