import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../registeration/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { 
    
  }
    submitForm:FormGroup=new FormGroup({
    name:new FormControl(null),
    email:new FormControl(null),
    subject:new FormControl(null),
    message:new FormControl(null)
  }) 

  sendForm(submitForm:FormGroup){
    this._AuthService.submitForm(submitForm.value).subscribe((data)=>{
      this._Router.navigate(['/thanks'])
    })
    
  }
  
  ngOnInit(): void {
  }

}
