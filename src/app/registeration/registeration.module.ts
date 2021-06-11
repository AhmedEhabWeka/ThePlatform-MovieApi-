import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationRoutingModule } from './registeration-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RegisterationRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
  
})
export class RegisterationModule { }
