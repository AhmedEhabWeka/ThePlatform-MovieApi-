import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedApiService } from '../shared-api.service';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  movieId:any;
  movieDetails:any;
  movieCredits:any[]=[];
  trailerUrl:any;
  trailerNotFound:boolean=false;
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
 
  constructor(private _ActivatedRoute:ActivatedRoute, private _SharedApiService:SharedApiService) {
    this.movieId=this._ActivatedRoute.snapshot.params.id;
    this._SharedApiService.getMovieDetails(this.movieId).subscribe((data)=>{
      this.movieDetails=data});
      this._SharedApiService.getMovieCredits(this.movieId).subscribe((data)=>{
        for(let i=0; i<data.cast.length;i++){
          this.movieCredits.push(data.cast[i]); 
          this.movieCredits.splice(6,1);
          console.log(data)
        } 
       }); 
       
       this._SharedApiService.getMovieTrailer(this.movieId).subscribe((data)=>{
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

  onImgError(event:any) { 
    event.target.src = 'assets/images/noimage2.png';
  }

  roundRating(rating:any){
    rating = Number(rating).toFixed(1)
    return rating
    }

}
