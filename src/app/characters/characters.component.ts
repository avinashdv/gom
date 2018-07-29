import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public currentCharacter;

  constructor(private _route:ActivatedRoute, router: Router, private gotHttpService: GotHttpService) { 
    console.log("Character constructor called");
  }

  ngOnInit() {
    let characterId = this._route.snapshot.paramMap.get('characterId');
  
    // console.log(this.currentCharacter);
    this.gotHttpService.getCurrentCharacter(characterId).subscribe(
      data => {
        console.log(data);
        this.currentCharacter = data;
        console.log(this.currentCharacter.allegiances.length);
        if(this.currentCharacter.allegiances.length > 0){
          console.log("Avinash");
        }
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

}
