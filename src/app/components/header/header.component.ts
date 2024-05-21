import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { InfoProfileComponent } from '../info-profile/info-profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon,IonGrid,IonRow,IonCol, InfoProfileComponent],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('HeaderComponent ngOnInit');
  }

}
