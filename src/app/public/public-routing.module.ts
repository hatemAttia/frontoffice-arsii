import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { EventsComponent } from './components/events/events.component';
import { MediasComponent } from './components/medias/medias.component';
import { PartnersComponent } from './components/partners/partners.component';
import { MembershipComponent } from './components/membership/membership.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: '', component: PresentationComponent },
      { path: '', component: OpportunitiesComponent },
      { path: '', component: EventsComponent },
      { path: '', component: MediasComponent },
      { path: '', component: PartnersComponent },
      { path: '', component: MembershipComponent },
      { path: '', component: ContactComponent },
      { path: '', component: FooterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
