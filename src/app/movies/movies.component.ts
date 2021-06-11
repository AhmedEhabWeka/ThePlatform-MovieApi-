import { Component, OnInit } from '@angular/core';
import { SharedApiService } from '../shared-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  topRatedMovies:any[]=[];
  totalRecords!:number;
  page:number=1;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  term:string='';
  
  
  constructor(private _SharedApiService:SharedApiService ) {
    
   
    
   this._SharedApiService.getTopRated('movie',this.page).subscribe((data)=>{
    this.topRatedMovies=data.results; 
    this.totalRecords=data.results.length;
   
  })

    
   }

  ngOnInit(): void {
  }

}
