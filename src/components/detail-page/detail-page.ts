import { Component } from '@angular/core';

/*
  Generated class for the DetailPage component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPageComponent {

  text: string;

  constructor() {
    console.log('Hello DetailPage Component');
    this.text = 'Hello World';
  }

}
