import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    OpportunitiesComponent,
    EventsComponent,
    MediasComponent,
    PartnersComponent,
    MembershipComponent,
    ContactComponent,
    NewsletterComponent,
    ConnectionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
