import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { WantToReadComponent } from './want-to-read/want-to-read.component';
import { ReadComponent } from './read/read.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailComponent } from './currently-reading/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    CurrentlyReadingComponent,
    WantToReadComponent,
    ReadComponent,
    BookDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
