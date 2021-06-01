import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modules
import { HomeComponent }  from './home/home.component'; // your "new" component
import {CreateEndpointComponent} from './create-endpoint/create-endpoint.component';
import { Pricing } from './pricing/pricing.component';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-endpoint',
    component: CreateEndpointComponent
  },
  {
    path:'pricing',
    component:Pricing
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
