import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { EventsComponent } from './components/events/events.component';
import { MediasComponent } from './components/medias/medias.component';
import { PartnersComponent } from './components/partners/partners.component';
import { JoinUsComponent } from './components/joinUs/joinUs.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { FooterComponent } from './components/footer/footer.component';
import { MembersComponent } from './components/members/members.component';
import { EventsDetailsComponent } from './components/events-details/events-details.component';
import { FormationsDetailsComponent } from './components/formations-details/formations-details.component';
import { ActualityComponent } from './components/actuality/actuality.component';
import { FormationComponent } from './components/formation/formation.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from './services/event.service';
import { PartnerService } from './services/partner.service';
import { BaseComponent } from './components/base/base.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule} from 'primeng/tag';
import { ToastModule} from 'primeng/toast';
import { ScrollTopModule} from 'primeng/scrolltop';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table'
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MemberService } from './services/member.service';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    PresentationComponent,
    OpportunitiesComponent,
    EventsComponent,
    MediasComponent,
    PartnersComponent,
    JoinUsComponent,
    ContactComponent,
    NewsletterComponent,
    ClubsComponent,
    FooterComponent,
    MembersComponent,
    EventsDetailsComponent,
    FormationsDetailsComponent,
    ActualityComponent,
    FormationComponent,
    BaseComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbCarouselModule,
    PublicRoutingModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    ToastModule,
    ScrollTopModule,
    GalleriaModule,
    ReactiveFormsModule,
    RecaptchaModule, 
    RecaptchaFormsModule,
    DynamicDialogModule,
    TableModule,
    ButtonModule
  ],
  providers: [EventService, PartnerService, MemberService, DialogService]
})
export class PublicModule { }
