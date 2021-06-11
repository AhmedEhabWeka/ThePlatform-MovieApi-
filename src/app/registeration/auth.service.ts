import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentYear:any;
  constructor(private _HttpClient:HttpClient, private _Router:Router) { 
    if(localStorage.getItem('currentUser')){
      this.saveCurrentUserData();
    }
  } 
  saveCurrentUser:any=new BehaviorSubject(null);
  register(formData:any):Observable<any>{
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signup`,formData)
  }

  login(formData:any):Observable<any>{
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signin`,formData)
  }

  submitForm(formData:any):Observable<any>{
    return this._HttpClient.post(`https://formspree.io/f/mgeryvgj`,formData)
  }

  saveCurrentUserData(){
    let encodedToken:any=localStorage.getItem('currentUser');
    console.log(encodedToken);
    let decodedToken=jwtDecode(encodedToken);
    this.saveCurrentUser.next(decodedToken);
    console.log(this.saveCurrentUser);
  }

  logout(){
      this.saveCurrentUser.next(null);
      localStorage.removeItem('currentUser');
      this._Router.navigate(['/login'])
      
  }

  getCurrentYear(){
    let date=new Date();
    this.currentYear=date.getFullYear();
    
  }



}
