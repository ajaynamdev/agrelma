import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


	faq = [
		{
			"id": "1",
			"q":"How Agrelma will help my company?",
			"a": "Agrelma creates a direct link between international food and wine importers and producers to communicate with each other. Agrelma opens many opportunities for producers, traders and importers in researching products, advertising goods and most importantly getting new clients. Agrelma cuts the cost of reasearching importers or producers by traveling to other countries. Using Agrelma, you get the chance to communicate in real time with different importers worldwide."
		},
		{
			"id": "2",
			"q":"How to subsribe in Agrelma?",
			"a": "It's very easy to subscribe in Agrelma. You just have to click this link and fill the subscription form and do the payment online. We then send you your personal access codes to full access to importers requests and insert your products unlimited."
		},
		{
			"id": "3",
			"q":"Are there any costs in-order to become a member in Agrelma?",
			"a": "Yes, It's only 500 EUR for Agrelma 1 year subscription."
		},
		{
			"id": "4",
			"q":"Which secure mode of payment is the fastest to subscribe?",
			"a": "You may use Credit card through X-pay (VISA, Master Card and American Express) and Paypal."
		},
		{
			"id": "5",
			"q":"What are the services I get after subscribing in Agrelma?",
			"a": "Services included are: Logistic services (TranspoBank), Information company ratings (CoFace Group and D&B Business Reports) and International Secure System of payments (E-Market Bank)."
		},
		{
			"id": "6",
			"q":"What are the Logistic Services?",
			"a": "Agrelma cooperates with TranspoBank (International exchange service for international freights to more than 16,000 European transport companies and hauliers). This will help you receives logistic quotations for your products."
		},
		{
			"id": "7",
			"q":"What is the Information company ratings?",
			"a": "Agrelma cooperates with CoFace Group and D&B Business Reports to help you check importers trading reliability and credibility."
		},
		{
			"id": "8",
			"q":"What is the International Secure System Payment?",
			"a": "Agrelma cooperates with E-market bank to help you make and receive payments on line safely and conveniently, using existing financial structures with bank accounts and credit cards."
		},
		{
			"id": "9",
			"q":"How can I contact the importers directly?",
			"a": "You may if you have your personal access codes."
		},
		{
			"id": "10",
			"q":"What I can do if If my access codes aren't working?",
			"a": "You have to contact us and let us know the problem."
		},
		{
			"id": "11",
			"q":"Will Agrelma charge me for any commissions and transaction fees after the sales have been made with importers?",
			"a": "No. We are a subscription based company rather transactional meaning producers can contact and close deals with importers without having to worry for any transactions fees."
		},
		{
			"id": "12",
			"q":"Are there any services that Agrelma offers aside from Agrelma Basic Subscription?",
			"a": "Yes. These are the Agrelma Directories (Food and Wine Importers or Producers) and Newsletter Services."
		},
		{
			"id": "13",
			"q":"What are the Agrelma Directories?",
			"a": "Includes Importer's and/or Producer's directories. The directories are made from the result of Agrelma's efforts since 2000, when the emarketplace began to be present on the international market, with complete data sets (name, address, phone, fax, email, website-if existing, main activity) of professionals worldwide in the food and wine business. Agrelma, always update the directory to give you a fresh and new information of the operators."
		},
		{
			"id": "14",
			"q":"Are these Directories were updated?",
			"a": "Yes. It is updated every 20 days a month. If new companies are entered in the directories or if there are any changes from the companies in the directories, you then will be updated. 80% of contacts and emails in the directory are from company importers' emails and not general emails."
		},
		{
			"id": "15",
			"q":"If I purchase the Directories, will I receive updates monthly?",
			"a": "Yes. New companies or changes from the contact details of the companies will be updated and you get informed."
		},
		{
			"id": "16",
			"q":"What are the costs of each diretory?",
			"a": "There are 4 types of directories (Food and Wine Importer's Directories) and (Food and Wine Producers' Directories). Each directory is 250 EUR with download in excel or pdf."
		},
		{
			"id": "17",
			"q":"How the Agrelma Newsletter service works?",
			"a": "Includes the graphical development of a personalised newsletter in English, which is distributed to about 60,000 importers (36,000 international buyers in the food and 24.000 buyers in the wine-business) and professionals abroad (restaurants, buyers, distributors, importers, specialized shops etc.) aimed at the direct promotion to those working in the sector and to boost more prospect clients."
		},
		{
			"id": "18",
			"q":"How much it costs?",
			"a": "It's 300 EUR."
		},
		{
			"id": "19",
			"q":"How many International importers receive the newsletter?",
			"a": "60.000 Wine and Food International importers."
		},
		{
			"id": "20",
			"q":"What's the percentage success rate of response I could get from the newsletter services?",
			"a": "If importers reply from your newsletter, I could tell that you get 20-30% of chances to close deals with them."
		}
	];





}
