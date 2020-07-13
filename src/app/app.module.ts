import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    NavbarComponent,
    NewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
