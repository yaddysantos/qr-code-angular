import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-code';

  url = 'https://cdn.sanity.io/images/0k2k2bbv/redesign_21/9d8447213a67ce12fcc4ccd186bf2403bbc62052-276x110.png';
  elementType = NgxQrcodeElementTypes.CANVAS;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.LOW;
  value: string = this.url;
  
  qrcode

  /**prueba 2 */
  public myAngularxQRcode: string = null;
  public imgIris: string = null;

  constructor(){
    this.myAngularxQRcode = 'Your QR code data string'
    this.imgIris = '../assets/img/logo-iris.png'
  }
  // public config: Options = {
  //   width: 300,
  //   height: 300,
  //   data: "https://www.facebook.com/",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  //   margin: 5,
  //   dotsOptions: {
  //     color: "#1977f3",
  //     type: "dots"
  //   },
  //   backgroundOptions: {
  //     color: "#ffffff",
  //   },
  //   imageOptions: {
  //     crossOrigin: "anonymous",
  //     margin: 0
  //   }
  // };
}
