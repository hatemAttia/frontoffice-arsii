import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventsDetailsComponent } from './components/events-details/events-details.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children :[
      {path: 'events-details', component: EventsDetailsComponent}
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
