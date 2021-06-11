import { Component, OnInit } from '@angular/core';
import { SharedApiService } from '../shared-api.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  popularPeople:any[]=[];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  constructor(private _SharedApiService:SharedApiService) {
    this._SharedApiService.getPeople().subscribe((data)=>{
      this.popularPeople=data.results;
    })
   }

  ngOnInit(): void {
  }

}
