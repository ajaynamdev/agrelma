import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FORM CONTROL

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


// NAVIGATION

import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


// LAYOUT

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';

// BUTTON AND INDICATORS

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';


// POPUP AND MODALS

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';


// DATA TABLE

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';











import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NguCarouselModule } from '@ngu/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent, LoginDialog, SignupDialog } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent, TryNow } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LatestRequestComponent } from './components/latest-request/latest-request.component';
import { LatestOfferComponent } from './components/latest-offer/latest-offer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AsearchComponent } from './components/asearch/asearch.component';
import { TestComponent } from './components/test/test.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FaqComponent } from './components/faq/faq.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { OfferComponent } from './components/offer/offer.component';
import { RequestComponent } from './components/request/request.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PartnersComponent } from './components/partners/partners.component';
import { XpayComponent } from './components/xpay/xpay.component';
import { LoginComponent } from './components/login/login.component';
import { PresentOnlineComponent } from './components/present-online/present-online.component';
import { SpecificRequestComponent } from './components/specific-request/specific-request.component';
import { ContactProducerComponent } from './components/contact-producer/contact-producer.component';
import { ContactDetailProducerComponent } from './components/contact-detail-producer/contact-detail-producer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    SidebarComponent,
    LatestRequestComponent,
    LatestOfferComponent,
    BannerComponent,
    AsearchComponent,
    TestComponent,
    NotfoundComponent,
    FaqComponent,
    LoginDialog,
    SignupDialog,
    SubscribeComponent,
    SearchresultComponent,
    OfferComponent,
    RequestComponent,
    ContactComponent,
    AboutComponent,
    PartnersComponent,
    XpayComponent,
    TryNow,
    LoginComponent,
    PresentOnlineComponent,
    SpecificRequestComponent,
    ContactProducerComponent,
    ContactDetailProducerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    CommonModule,
    NguCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [LoginDialog, SignupDialog, TryNow]
})
export class AppModule { }
