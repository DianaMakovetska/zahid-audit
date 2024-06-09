import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BodyComponent} from './components/body/body.component';
import {MainComponent} from './components/body/bodyComponents/main/main.component';
import {AboutUsComponent} from './components/body/bodyComponents/about-us/about-us.component';
import {BenefitsComponent} from './components/body/bodyComponents/benefits/benefits.component';
import {TabsModule} from "ngx-bootstrap/tabs";
import {OurTeamComponent} from './components/body/bodyComponents/our-team/our-team.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {VacanciesComponent} from './components/body/bodyComponents/vacancies/vacancies.component';
import {ServicesComponent} from './components/body/bodyComponents/services/services.component';
import {PartnersComponent} from './components/body/bodyComponents/partners/partners.component';
import {ContactsComponent} from './components/body/bodyComponents/contacts/contacts.component';
import {AccordionModule} from "ngx-bootstrap/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {RouterModule, Routes} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";

const routes:Routes = [
  { path: '', component: MainComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'team', component: OurTeamComponent },
  { path: 'vacancies', component: VacanciesComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Handle undefined routes

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainComponent,
    AboutUsComponent,
    BenefitsComponent,
    OurTeamComponent,
    VacanciesComponent,
    ServicesComponent,
    PartnersComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    TabsModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    MatButtonToggleModule,
    MatButtonModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
    MatToolbarModule,
    ModalModule,
    BsDropdownModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
