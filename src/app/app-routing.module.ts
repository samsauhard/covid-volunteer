import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VolunteerComponent} from './volunteer/volunteer.component';
import { HomeComponent_} from './home_sau/home.component';
import { SeekhelpComponent} from './seekhelp/seekhelp.component';
import {DashboardOfferedHelpComponent} from './dashboard-offered-help/dashboard-offered-help.component'

const routes: Routes = [
	// { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard-offered-help', component: DashboardOfferedHelpComponent },

       { path: 'volunteer', component: VolunteerComponent },
  { path: 'seekhelp', component: SeekhelpComponent },
  { path: 'home', component: HomeComponent_ },
       
  
       
   // ]
    // },
        
      

    // home route protected by auth guard
    { path: '**', redirectTo: 'home', pathMatch: 'full' },

    

      
   // children: [
   //    { path: 'create-party', component: CreatePartyComponent },
   //    { path: 'search-party', component: RequestPartyComponent }
   //  ]
   //   }


    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
