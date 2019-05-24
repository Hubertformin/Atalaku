import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatVideoModule } from 'mat-video';
import { MaterialComponentsModuleModule } from './material-components-module/material-components-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SubscriptionComponent } from './views/subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatVideoModule,
    MaterialComponentsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
