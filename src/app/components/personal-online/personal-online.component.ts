import { Component, OnInit } from '@angular/core';
import { IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addSharp } from 'ionicons/icons';
@Component({
  selector: 'app-personal-online',
  templateUrl: './personal-online.component.html',
  styleUrls: ['./personal-online.component.scss'],
  standalone: true,
  imports: [ IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons]
})
export class PersonalOnlineComponent  implements OnInit {
  

  constructor() { 
    addIcons({ addSharp });
  }

  ngOnInit() {
    console.log('PersonalOnlineComponent ngOnInit');
  }

}
