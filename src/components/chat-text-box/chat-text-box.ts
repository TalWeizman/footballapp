import { Component,Input } from '@angular/core'; /*Output,EventEmitter*/

/*
  Generated class for the ChatTextBox component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'chat-text-box',
  templateUrl: 'chat-text-box.html'
})
export class ChatTextBoxComponent {

  @Input("textInput") textToUse;
  @Input("userName") userName;
  @Input("imageUrl") imageUrl;

  constructor() {
    
    
  }



}
