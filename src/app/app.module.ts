import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes/homes.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeDetailsComponent } from './homes/home-details/home-details.component';
import { HomeItemComponent } from './homes/home-item/home-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HomeDetailsComponent,
    HomeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
