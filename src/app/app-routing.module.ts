import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AsearchComponent } from './components/asearch/asearch.component';
import { TestComponent } from './components/test/test.component';
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
import { MessageComponent } from './components/message/message.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { AuthGuardService } from './admin/services/auth-guard.service';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';

// Producer Routes
import { ProducerComponent } from './admin/components/producer/producer.component';
import { OfferRequestComponent } from './producer/components/offer-request/offer-request.component';
import { NewOfferComponent } from './producer/components/new-offer/new-offer.component';
import { EditOfferComponent } from './producer/components/edit-offer/edit-offer.component';
import { NewRequestComponent } from './producer/components/new-request/new-request.component';
import { BookRequestComponent } from './producer/components/book-request/book-request.component';
import { CompanyDataComponent } from './producer/components/company-data/company-data.component';
import { MessageAgrelmaComponent } from './producer/components/message-agrelma/message-agrelma.component';
import { MessageListComponent } from './producer/components/message-list/message-list.component';
import { MiniSiteComponent } from './producer/components/mini-site/mini-site.component';
import { OtherDataComponent } from './producer/components/other-data/other-data.component';
import { ProducerAccountingComponent } from './producer/components/producer-accounting/producer-accounting.component';

import { AddFilesComponent } from './producer/components/add-files/add-files.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "advance-search",
		component: AsearchComponent
	},
	{
		path: "faq",
		component: FaqComponent
	},
	{
		path: "search-result",
		component: SearchresultComponent
	},
	{
		path: "search-result/:id",
		component: SearchresultComponent
	},
	{
		path: "search-result/:id/:qid",
		component: SearchresultComponent
	},
	{
		path: "search-result/:id/:qid/:pid",
		component: SearchresultComponent
	},
	{
		path: "search-result/:id/:qid/:pid/:thetype",
		component: SearchresultComponent
	},
	{
		path: "search-result/:id/:qid/:pid/:country/:thetype",
		component: SearchresultComponent
	},
	{
		path: "offer",
		component: OfferComponent
	},
	{
		path: "offer/:id",
		component: OfferComponent
	},
	{
		path: "request",
		component: RequestComponent
	},
	{
		path: "request/:id",
		component: RequestComponent
	},
	{
		path: "subscribe",
		component: SubscribeComponent
	},
	{
		path: "contact-us",
		component: ContactComponent
	},
	{
		path: "about-us",
		component: AboutComponent
	},
	{
		path: "x-pay",
		component: XpayComponent
	},
	{
		path: "partners",
		component: PartnersComponent
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "present-product-online",
		component: PresentOnlineComponent
	},
	{
		path: "send-specific-request",
		component: SpecificRequestComponent
	},
	{
		path: "contact-producer",
		component: ContactProducerComponent
	},
	{
		path: "contact-detail-producer",
		component: ContactDetailProducerComponent
	},
	{
		path: "contact-detail-producer/:id",
		component: ContactDetailProducerComponent
	},
	{
		path: "message",
		component: MessageComponent
	},
	{
		path: "message/:id",
		component: MessageComponent
	},

	{
		path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
        {
          path: 'producer',
          component: ProducerComponent,
          canActivate: [AuthGuardService],
          children : [
          	{
	          	path: '',
	          	component: OfferRequestComponent
	          },
	          {
	          	path: 'offer-request',
	          	component: OfferRequestComponent
	          },
	          {
	          	path: 'new-offer',
	          	component: NewOfferComponent

	          },
	          {
	          	path: 'new-request',
	          	component: NewRequestComponent

	          },
	          {
	          	path: 'book-request',
	          	component: BookRequestComponent
	          },
	          {
	          	path: 'company-data',
	          	component: CompanyDataComponent
	          },
	          {
	          	path: 'message-agrelma',
	          	component: MessageAgrelmaComponent
	          },
	          {
	          	path: 'message-list',
	          	component: MessageListComponent
	          },
	          {
	          	path: 'mini-site',
	          	component: MiniSiteComponent
	          },
	          {
	          	path: 'other-data',
	          	component: OtherDataComponent
	          },
						{
	          	path: 'producer-accounting',
	          	component: ProducerAccountingComponent
	          },
	          {
	          	path: 'add-files',
	          	component: AddFilesComponent
	          },
	          {
	          	path: 'add-files/:id',
	          	component: AddFilesComponent
	          },
	          {
	          	path: 'edit-offer/:id',
	          	component: EditOfferComponent
	          }

          ]
        }
      ]
	},

	{ path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
