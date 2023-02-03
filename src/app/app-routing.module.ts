import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { Error404Component } from './error404/error404.component';
import { RegisterComponent } from './registeration/register/register.component';
import { LoginComponent } from './registeration/login/login.component';
import { AuthguardGuard } from './registeration/authguard.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { ContactComponent } from './contact/contact.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'movies', component:MoviesComponent},
  {path:'people',  component:PeopleComponent},
  {path:'tv',  component:TvComponent},
  {path:'contact',  component:ContactComponent},
  {path:'thanks',  component:ThanksComponent},
  {path:'moviedetails/:id', component:MoviedetailsComponent},
  {path:'tvdetails/:id', component:TvdetailsComponent},
  {path:'peopledetails/:id', component:PeopleDetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
