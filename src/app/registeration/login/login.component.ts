import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { }
  error:string='';
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z0-9_]{3,9}$`)]),

  }) 
  
  submitForm(loginForm:FormGroup){
    this._AuthService.login(loginForm.value).subscribe((data)=>{
      if(data.message==='success')
      {
       
        localStorage.setItem('currentUser',data.token)
        this._AuthService.saveCurrentUserData();
        this._Router.navigate(['/home']);
      }
      else
      {
        this.error=data.message;
        console.log(data)
      }
    })
    console.log(loginForm);
  }

  ngOnInit(): void {
  }

}
