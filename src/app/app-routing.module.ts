import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AsearchComponent } from './components/asearch/asearch.component';
import { TestComponent } from './components/test/test.component';
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
	{ path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
