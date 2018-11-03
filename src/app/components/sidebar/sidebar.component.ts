import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countries = [ "Afghanistan",		"Albania",		"Algeria",		"American Samoa",		"Andorra",		"Angola",		"Anguilla",		"Antarctica",		"Antigua and Barbuda",		"Argentina",		"Armenia",		"Aruba",		"Asia-Pacific Region",		"Australia",		"Austria",		"Azerbaijan",		"Bahamas",		"Bahrain",		"Bangladesh",		"Barbados",		"Belarus",		"Belgium",		"Belize",		"Benin",		"Bermuda",		"Bhutan",		"Bolivia",		"Bonaire",		"Bosnia and Herzegovina",		"Botswana",		"Bouvet Island",		"Brazil",		"British Indian Ocean Territory",		"British Virgin Islands",		"Brunei Darussalam",		"Bulgaria",		"Burkina Faso",		"Burundi",		"Cambodia",		"Cameroon",		"Canada",		"Canary Islands",		"Cape Verde",		"Cayman Islands",		"Central African Republic",		"Ceuta",		"Chad",		"Chile",		"China",		"Christmas Island",		"Cocos (Keeling) Islands",		"Colombia",		"Comoros",		"Congo",		"Congo, The Democratic Republic of the",		"Cook Islands",		"Costa Rica",		"Côte d'Ivoire",		"Croatia",		"Cuba",		"Curaçao",		"Cyprus",		"Czech Republic",		"Denmark",		"Djibouti",		"Dominica",		"Dominican Republic",		"East Timor",		"Ecuador",		"Egypt",		"El Salvador",		"Equatorial Guinea",		"Eritrea",		"Estonia",		"Ethiopia",		"Falkland Islands (Malvinas)",		"Faroe Islands",		"Fiji",		"Finland",		"France",		"France, Metropolitan",		"French Guiana",		"French Polynesia",		"French Southern Territories",		"Gabon",		"Gambia",		"Georgia",		"Germany",		"Ghana",		"Gibraltar",		"Greece",		"Greenland",		"Grenada",		"Guadeloupe",		"Guam",		"Guatemala",		"Guinea",		"Guinea-Bissau",		"Guyana",		"Haiti",		"Heard Island and McDonald Islands",		"Holy See (Vatican City State)",		"Honduras",		"Hong Kong",		"Hungary",		"Iceland",		"India",		"Indonesia",		"Iran, Islamic Republic of",		"Iraq",		"Ireland",		"Israel",		"Italy",		"Jamaica",		"Japan",		"Jordan",		"Kazakstan",		"Kenya",		"Kiribati",		"Korea, Democratic People's Republic of",		"Korea, Republic of",		"Kuwait",		"Kyrgyzstan",		"Laos Democratic Republic",		"Latvia",		"Lebanon",		"Lesotho",		"Liberia",		"Libyan Arab Jamahiriya",		"Liechtenstein",		"Lithuania",		"Luxembourg",		"Macau",		"Macedonia, the Former Yugoslav Republic of",		"Madagascar",		"Madeira Islands",		"Malawi",		"Malaysia",		"Maldives",		"Mali",		"Malta",		"Marshall Islands",		"Martinique",		"Mauritania",		"Mauritius",		"Mayotte",		"Melilla",		"Mexico",		"Micronesia, Federated States of",		"Moldova, Republic of",		"Monaco",		"Mongolia",		"Montenegro",		"Montserrat",		"Morocco",		"Mozambique",		"Myanmar (Burma)",		"Namibia",		"Nauru",		"Nepal",		"Netherlands",		"Netherlands Antilles",		"New Caledonia",		"New Zealand",		"Nicaragua",		"Niger",		"Nigeria",		"Niue",		"Norfolk Island",		"Northern Mariana Islands",		"Norway",		"Oman",		"Pakistan",		"Palau",		"Palestinian Territory, Occupied",		"Panama",		"Papua New Guinea",		"Paraguay",		"Peru",		"Philippines",		"Pitcairn",		"Poland",		"Portugal",		"Puerto Rico",		"Qatar",		"Réunion",		"Romania",		"Russian Federation",		"Rwanda",		"Saba",		"Sahrawi Arab Democratic Republic",		"Saint Barthélemy",		"Saint Helena",		"Saint Kitts and Nevis",		"Saint Lucia",		"Saint Pierre and Miquelon",		"Saint Vincent and the Grenadines",		"Samoa",		"San Marino",		"São Tomé and Príncipe",		"Saudi Arabia",		"Senegal",		"Serbia",		"Seychelles",		"Sierra Leone",		"Singapore",		"Slovakia",		"Slovenia",		"Solomon Islands",		"Somalia",		"South Africa",		"South Georgia and the South Sandwich Islands",		"Spain",		"Sri Lanka",		"Sudan",		"Suriname",		"Svalbard and Jan Mayen",		"Swaziland",		"Sweden",		"Switzerland",		"Syrian Arab Republic",		"Taiwan",		"Tajikistan",		"Tanzania, United Republic of",		"Thailand",		"Togo",		"Tokelau",		"Tonga",		"Trinidad and Tobago",		"Tunisia",		"Turkey",		"Turkmenistan",		"Turks and Caicos Islands",		"Tuvalu",		"Uganda",		"Ukraine",		"United Arab Emirates",		"United Kingdom",		"United States",		"United States Minor Outlying Islands",		"Uruguay",		"Uzbekistan",		"Vanuatu",		"Venezuela",		"Vietnam",		"Virgin Islands, British",		"Virgin Islands, U.S.",		"Wallis and Futuna",		"Western Sahara",		"Yemen",		"Zaire",		"Zambia",		"Zimbabwe" ];


  sectors = [
		{
			"id": "1",
			"name": "WINES AND LIQUORS",
			"sub": ["Quality Wine", "Table Wine", "Liquors"]
		},
		{
			"id": "2",
			"name": "OIL AND OLIVES",
			"sub": ["Oil", "Olives", "Oil Seeds"]
		},
		{
			"id": "3",
			"name": "PASTA",
			"sub": []
		},
		{
			"id": "4",
			"name": "DELICATESSEN",
			"sub": []
		},
		{
			"id": "3",
			"name": "MEAT AND CURED PORK",
			"sub": ["Cured Pork", "Meat"]
		},
		{
			"id": "4",
			"name": "FRUITS AND VEGETABLES",
			"sub": ["Fruits","Citrus","Vegetables","Packed Fruit and Vegetables"]
		},
		{
			"id": "7",
			"name": "PRESERVES",
			"sub": []
		},
		{
			"id": "8",
			"name": "SWEETS AND DOUGH PRODUCTS",
			"sub": []
		},
		{
			"id": "9",
			"name": "CHEESE",
			"sub": []
		},
		{
			"id": "10",
			"name": "COFFEE",
			"sub": []
		},
		{
			"id": "11",
			"name": "DRINKS",
			"sub": []
		},
		{
			"id": "12",
			"name": "FROZEN PRODUCTS",
			"sub": []
		},
		{
			"id": "13",
			"name": "CEREALS",
			"sub": []
		},
		{
			"id": "14",
			"name": "CONVENIENCE FOOD/READY MEALS",
			"sub": []
		},
		{
			"id": "15",
			"name": "VINEGAR",
			"sub": []
		},
		{
			"id": "16",
			"name": "FISH AND SEAFOOD",
			"sub": ["Fish and Seafood", "Crostacea and Mollusca", "Packed Fisheries"]
		},
  ];

}
