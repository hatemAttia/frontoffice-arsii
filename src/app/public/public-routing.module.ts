import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventsDetailsComponent } from './components/events-details/events-details.component';
import { BaseComponent } from './components/base/base.component';
import { JoinUsComponent } from './components/joinUs/joinUs.component';
import { AllMediasComponent } from './components/all-medias/all-medias.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: NavbarComponent },
      { path: 'events-details/:id', component: EventsDetailsComponent },
      { path: 'join-us', component: JoinUsComponent },
      { path: 'allMedias', component: AllMediasComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
