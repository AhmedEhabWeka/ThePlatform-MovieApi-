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
  {path:'home',canActivate:[AuthguardGuard], component:HomeComponent},
  {path:'movies',canActivate:[AuthguardGuard], component:MoviesComponent},
  {path:'people', canActivate:[AuthguardGuard], component:PeopleComponent},
  {path:'tv', canActivate:[AuthguardGuard], component:TvComponent},
  {path:'contact', canActivate:[AuthguardGuard], component:ContactComponent},
  {path:'thanks', canActivate:[AuthguardGuard], component:ThanksComponent},
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
