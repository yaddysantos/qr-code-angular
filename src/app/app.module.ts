import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angularx-qrcode';
// import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    NgxQRCodeModule,
    // NgxQrcodeStylingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
