import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { EventsComponent } from './events/events.component';
import { MediasComponent } from './medias/medias.component';
import { PartnersComponent } from './partners/partners.component';
import { MembershipComponent } from './membership/membership.component';
import { ContactComponent } from './contact/contact.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ConnectionComponent } from './connection/connection.component';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./private/private.module').then((m) => m.PrivateModule),
//   },
//   {
//     path: '**',
//     redirectTo: '',
//     pathMatch: 'full',
//   },
// ];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'opportunities', component: OpportunitiesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'medias', component: MediasComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'connection', component: ConnectionComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
