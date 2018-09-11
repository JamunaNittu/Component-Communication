import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanauthService } from './canauth.service';

const routes: Routes = [
  { 
    path:"", 
   
    component:LoginComponent 
  },

  {
     path:"dashboard", 
    
     component:DashboardComponent 
    },
    { 
      path:"login", 
      component:LoginComponent 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
