import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomesComponent } from './homes/homes/homes.component';
import { HomeDetailsComponent } from './homes/home-details/home-details.component';

const appRoutes: Routes = [
	{ path: 'homes', component: HomesComponent },
	{ path: 'homes/:id/details', component: HomeDetailsComponent }
];


@NgModule({
  declarations: [],
  imports: [
	CommonModule,
	RouterModule.forRoot( appRoutes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
