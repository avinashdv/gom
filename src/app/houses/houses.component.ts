import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from'@angular/router';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  public currentHouse;

  constructor(private _route:ActivatedRoute, private router:Router, private gotHttpService:GotHttpService) {
    console.log("House Constructor called");
   }

  ngOnInit() {
    let houseId = this._route.snapshot.paramMap.get('houseId');
    
    this.gotHttpService.getCurrentHouse(houseId).subscribe(
      data => {
        console.log(data);
        this.currentHouse = data;
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

}
