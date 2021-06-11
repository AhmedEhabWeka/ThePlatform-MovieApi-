import { Component, OnInit } from '@angular/core';
import { SharedApiService } from '../shared-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[]=[];
  trendingTV:any[]=[];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  term:string='';
  constructor(private _SharedApiService:SharedApiService) {
    this._SharedApiService.getTrending('movie').subscribe(
      (data)=>{
        this.trendingMovies=data.results.slice(0,8);
      },
      (error)=>{
        console.log('Error'+error)
      },
      ()=>{
        console.log('Api Completed')
        console.log(this.trendingMovies)

      }
    )

    this._SharedApiService.getTrending('tv').subscribe(
      (data)=>{
        this.trendingTV=data.results.slice(0,8);
      },
      (error)=>{
        console.log('Error'+error)
      },
      ()=>{
        console.log('Api Completed')
        console.log(this.trendingTV)
      }
    )
   }

  ngOnInit(): void {
  }

}
