import { SharedApiService } from '../shared-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  topRatedTv:any[]=[];
  totalRecords!:number;
  page:number=1;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  term:string='';
  
  
  constructor(private _SharedApiService:SharedApiService ) {
    
   
    
   this._SharedApiService.getTopRated('tv',this.page).subscribe((data)=>{
    this.topRatedTv=data.results; 
    this.totalRecords=data.results.length;
   
  })

    
   }

  ngOnInit(): void {
  }

}
