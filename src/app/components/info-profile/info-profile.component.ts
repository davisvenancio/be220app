import { Component, OnInit } from '@angular/core';
import { IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addSharp, bodySharp, trophySharp } from 'ionicons/icons';
@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss'],
  standalone: true,
  imports: [ IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons]
})
export class InfoProfileComponent  implements OnInit {

  constructor() {
    addIcons({ addSharp, bodySharp, trophySharp});
   }

  ngOnInit() {
    console.log('InfoProfileComponent ngOnInit');
  }

}
