import { Component, ElementRef, ViewChild } from '@angular/core';
import { QrcodeComponent } from '@techiediaries/ngx-qrcode';
import html2canvas from 'html2canvas';
import { ElementFinder } from 'protractor';
// import { ClipboardService } from 'ngx-clipboard/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-code';

  myAngularxQRcode = 'https://www.linkedin.com/in/yaddy-katherin-rojas-santos-657171149/';

  @ViewChild('QrImg') screen: QrcodeComponent;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('dowloadLink') dowloadLink: ElementRef;

  constructor(){}

  prueba(){
   console.log(this.screen);
    // console.log(document.querySelector('.qrcode canvas'));
    html2canvas(document.querySelector('.qrcode canvas')).then(canva =>{
      console.log(document.body.appendChild(canva)); 
      console.log(canva.toDataURL('image/png'));
      let blobData = this.convertBase64ToBlob(canva.toDataURL('image/png'))
      const url = window.URL.createObjectURL(blobData)
      console.log(blobData);
      console.log(url);
      //document.execCommand("copy",null,canva.toDataURL('imagen'))
      // this.clipBoard.copy(canva.toDataURL('imagen'))
     
    })
  }

  private convertBase64ToBlob(Base64Image: any) {
    // SPLIT INTO TWO PARTS
    const parts = Base64Image.split(';base64,');
    // HOLD THE CONTENT TYPE
    const imageType = parts[0].split(':')[1];
    // DECODE BASE64 STRING
    const decodedData = window.atob(parts[1]);
    // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
    const uInt8Array = new Uint8Array(decodedData.length);
    // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // RETURN BLOB IMAGE AFTER CONVERSION
    return new Blob([uInt8Array], { type: imageType });
  }
  
  TestHtml2canva(){
    // html2canvas(document.querySelector(".qrcode canvas")).then(canvas => {
    //   let data = document.body.appendChild(canvas).toDataURL('image/png')
    //   console.log(document.body.appendChild(canvas).toDataURL('image/png'));
    // });
    // document.execCommand("copy")
    // html2canvas(document.querySelector(".qrcode canvas")).then(canva =>
    //   canva.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]))
    // )
  }
}
