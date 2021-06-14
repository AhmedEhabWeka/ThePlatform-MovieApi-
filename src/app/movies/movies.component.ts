import { Component, OnInit } from '@angular/core';
import { SharedApiService } from '../shared-api.service';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  topRatedMovies:any[]=[];
  page:number;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  term:string='';
  
  
 
  public config: PaginationInstance = {
    itemsPerPage: 20,
    currentPage:1 
  };

  
  constructor(private _SharedApiService:SharedApiService ) {
    
    for(this.page=1;this.page<101;this.page++){
      this._SharedApiService.getTopRated('movie',this.page).subscribe((data)=>{
        this.topRatedMovies=[...this.topRatedMovies,...data.results]; 
      })
     }
    
   

    
   }

  ngOnInit(): void {
    
  }

  onPageChange(number: number) {
    
    this.config.currentPage = number;
}

onImgError(event:any) { 
  event.target.src = 'assets/images/noimage2.png';
}

}
