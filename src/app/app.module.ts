import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ManekiComponent } from './maneki/maneki.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManekiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    TitleCasePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
