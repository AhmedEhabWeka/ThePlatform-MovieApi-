import { AuthService } from './registeration/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
}
