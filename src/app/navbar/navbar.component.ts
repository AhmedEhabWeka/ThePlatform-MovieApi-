import { Component, OnInit } from '@angular/core';
import { AuthService } from '../registeration/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;
  constructor(private _AuthService:AuthService) {
   this._AuthService.saveCurrentUser.subscribe(()=>{
     if(_AuthService.saveCurrentUser.getValue()==null)
     {
        this.isLogin=false;
     }
     else{
        this.isLogin=true;
     }
   })
   }

  logout(){
    this._AuthService.logout();
  }

  ngOnInit(): void {
  }

}
