import { SharedApiService } from '../shared-api.service';
import { Component, OnInit } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  topRatedTv:any[]=[];
  totalRecords!:number;
  page:number;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  term:string='';
  public config: PaginationInstance = {
    itemsPerPage: 20,
    currentPage:1 
  };
  
  constructor(private _SharedApiService:SharedApiService ) {
    
    for(this.page=1;this.page<93;this.page++){
      this._SharedApiService.getTopRated('tv',this.page).subscribe((data)=>{
  
        this.topRatedTv=[...this.topRatedTv,...data.results]; 
        
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
