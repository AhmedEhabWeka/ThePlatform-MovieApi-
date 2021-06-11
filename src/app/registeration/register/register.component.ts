import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { }
  error:string='';
  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(null,[Validators.required,Validators.min(10),Validators.max(100)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z0-9_]{3,9}$`)]),

  }) 
  
  submitForm(registerForm:FormGroup){
    this._AuthService.register(registerForm.value).subscribe((data)=>{
      if(data.message==='success')
      {
        this._Router.navigate(['/login'])
      }
      else
      {
        this.error=data.errors.email.message;
        console.log(data)
      }
    })
    console.log(registerForm);
  }

  ngOnInit(): void {
  }

}
