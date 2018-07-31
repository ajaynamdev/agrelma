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
import { NotfoundComponent } from './components/notfound/notfound.component';

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
		path: "offer",
		component: OfferComponent
	},
	{
		path: "request",
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

	{ path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
