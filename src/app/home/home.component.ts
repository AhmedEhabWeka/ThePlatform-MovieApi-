import { Component, OnInit } from '@angular/core';
import { SharedApiService } from '../shared-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  customOptions: OwlOptions = {
    loop: true,
    // rewind: true,
    items:3,   
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    autoWidth: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    animateIn: true,
    animateOut: true,
    dots: false,
    dotsSpeed: 700,
    slideBy: 'page',
    slideTransition: 'ease-out',
  }

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

  roundRating(rating:any){
    rating = Number(rating).toFixed(1)
    
    return rating
    }

  onImgError(event:any) { 
    event.target.src = 'assets/images/noimage2.png';
  }

}
