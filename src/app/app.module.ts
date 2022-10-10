import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, AllComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/Home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, AllComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
