import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedApiService } from '../shared-api.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent implements OnInit {
  tvId:any;
  tvDetails:any;
  tvCredits:any[]=[];
  trailerUrl:any;
  trailerNotFound:boolean=false;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  constructor(private _ActivatedRoute:ActivatedRoute, private _SharedApiService:SharedApiService) {
    this.tvId=this._ActivatedRoute.snapshot.params.id;
    this._SharedApiService.getTvDetails(this.tvId).subscribe((data)=>{
      this.tvDetails=data});

      this._SharedApiService.getTvCredits(this.tvId).subscribe((data)=>{
        for(let i=0; i<data.cast.length;i++){
          this.tvCredits.push(data.cast[i]); 
          this.tvCredits.splice(6,1);
          console.log(data)
        } 
       }); 

       this._SharedApiService.getTvTrailer(this.tvId).subscribe((data)=>{
         if(data.results.length!='0')
         {
          this.trailerUrl=`https://www.youtube.com/watch?v=${data.results[0].key}`
         }
         else
         {
          this.trailerNotFound=true;
         }
        
       
     })

   }

  ngOnInit(): void {
  }

}
