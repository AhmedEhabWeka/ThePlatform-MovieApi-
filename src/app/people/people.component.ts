import { Component, OnInit } from '@angular/core';
import { SharedApiService } from '../shared-api.service';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  popularPeople:any[]=[];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  page:number;
  

  public config: PaginationInstance = {
    itemsPerPage: 20,
    currentPage:1 
  };
  constructor(private _SharedApiService:SharedApiService) {

    
    for(this.page=1;this.page<51;this.page++){
      this._SharedApiService.getPeople(this.page).subscribe((data)=>{
  
        this.popularPeople=[...this.popularPeople,...data.results]; 
        
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
