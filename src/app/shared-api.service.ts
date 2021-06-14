import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  constructor(private _HttpClient:HttpClient) {

   }
   getTrending(mediatype:string):Observable<any>{
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=866cd3a065ef9304a549f1d65e494940`);
   }

   getMovieDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=866cd3a065ef9304a549f1d65e494940`);
  }

  getTvDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=866cd3a065ef9304a549f1d65e494940`);
  }

  getMovieCredits(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=866cd3a065ef9304a549f1d65e494940`);
  }

  getTvCredits(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=866cd3a065ef9304a549f1d65e494940`);
  }

  getMovieTrailer(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=866cd3a065ef9304a549f1d65e494940`);
  }

  getTvTrailer(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=866cd3a065ef9304a549f1d65e494940`);
  }

  getTopRated(mediatype:string,i:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediatype}/top_rated?api_key=866cd3a065ef9304a549f1d65e494940&page=${i}`)
  }

  getPeople(i:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=866cd3a065ef9304a549f1d65e494940&page=${i}`)
  }
  getPeopleDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=866cd3a065ef9304a549f1d65e494940`)
  }


}
