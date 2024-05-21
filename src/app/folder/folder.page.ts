import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { InfoProfileComponent } from '../components/info-profile/info-profile.component';
import { PersonalOnlineComponent } from '../components/personal-online/personal-online.component';
import { TrainingProgramsComponent } from '../components/training-programs/training-programs.component';
import { addIcons } from 'ionicons';
import { notificationsSharp } from 'ionicons/icons';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon,IonGrid,IonRow,IonCol, InfoProfileComponent, PersonalOnlineComponent, TrainingProgramsComponent],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    addIcons({ notificationsSharp });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log("🚀 ~ FolderPage ~ ngOnInit ~ this.activatedRoute.snapshot.paramMap.get('id'):", this.activatedRoute.snapshot.paramMap.get('id'))
  }
}
