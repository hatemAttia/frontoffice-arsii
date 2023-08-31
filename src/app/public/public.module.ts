import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { EventsComponent } from './components/events/events.component';
import { MediasComponent } from './components/medias/medias.component';
import { PartnersComponent } from './components/partners/partners.component';
import { MembershipComponent } from './components/membership/membership.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { FooterComponent } from './components/footer/footer.component';
import { MembersComponent } from './components/members/members.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    PresentationComponent,
    OpportunitiesComponent,
    EventsComponent,
    MediasComponent,
    PartnersComponent,
    MembershipComponent,
    ContactComponent,
    NewsletterComponent,
    ClubsComponent,
    FooterComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
