import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventsDetailsComponent } from './components/events-details/events-details.component';
import { BaseComponent } from './components/base/base.component';
import { MembershipComponent } from './components/membership/membership.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: NavbarComponent },
      { path: 'events-details/:id', component: EventsDetailsComponent },
      { path: 'join-us', component: MembershipComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
