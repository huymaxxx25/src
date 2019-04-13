import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainHeaderComponent} from './main-header/main-header.component'
import {Body} from './body/body.component'
import {Slide} from './slide/slide.component'
import {NavBarComponent} from './nav-bar/nav-bar.component'
import {PathComponent} from './path/path.component'
import {FooterComponent} from './footer/footer.component'
import {MainPage} from './main-page/main-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    Body,
    Slide,
    NavBarComponent,
    PathComponent,
    FooterComponent,
    MainPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
