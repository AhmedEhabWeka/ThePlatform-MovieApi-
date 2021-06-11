import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedApiService } from '../shared-api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  peopleId:any;
  peopleDetails:any;
  imdbUrl:any;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  constructor(private _ActivatedRoute:ActivatedRoute, private _SharedApiService:SharedApiService) {
    this.peopleId=this._ActivatedRoute.snapshot.params.id;
    this._SharedApiService.getPeopleDetails(this.peopleId).subscribe((data)=>{
      this.peopleDetails=data;
      this.imdbUrl=`https://www.imdb.com/name/${data.imdb_id}/`
      
    })
   }

  ngOnInit(): void {
  }

}
