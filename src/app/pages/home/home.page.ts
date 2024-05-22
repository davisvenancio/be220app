import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { InfoProfileComponent } from '../../components/info-profile/info-profile.component';
import { PersonalOnlineComponent } from '../../components/personal-online/personal-online.component';
import { TrainingProgramsComponent } from '../../components/training-programs/training-programs.component';
import { addIcons } from 'ionicons';
import { notificationsSharp } from 'ionicons/icons';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ContentComponent } from 'src/app/components/content/content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon,IonGrid,IonRow,IonCol,HeaderComponent, InfoProfileComponent, PersonalOnlineComponent, TrainingProgramsComponent, ContentComponent],
})
export class HomePage implements OnInit {


  constructor() {
    addIcons({ notificationsSharp });
  }

  ngOnInit() {
    console.log('HomePage ngOnInit');
  }

}
