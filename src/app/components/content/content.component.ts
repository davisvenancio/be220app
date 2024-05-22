import { Component, OnInit } from '@angular/core';
import { IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
  imports: [ IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons]
})
export class ContentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ContentComponent initialized');
  }

}
