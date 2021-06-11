import { AuthService } from './../registeration/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear:any;
  constructor(private _AuthService:AuthService){
    this._AuthService.getCurrentYear();
    this.currentYear= this._AuthService.currentYear;
    
  }
  
  ngOnInit(): void {
    
  }

}
