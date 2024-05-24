import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons, IonSkeletonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addSharp, bodySharp, trophySharp } from 'ionicons/icons';
import { userData } from 'src/app/models/user-data.model';
import { UserDataService } from 'src/app/services/user-data.service';
@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss'],
  standalone: true,
  imports: [ IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons,IonSkeletonText,  CommonModule]
})
export class InfoProfileComponent  implements OnInit {

  public loaded = false;
  userData: userData[] | undefined;

  constructor(private userDataService: UserDataService) {
    addIcons({ addSharp, bodySharp, trophySharp});
   }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.userDataService.getUserData().subscribe((data: userData[]) => { 
      this.userData = data;
      this.skeletonLoad();
    }, error => {
      console.error("🚀 ~ InfoProfileComponent ~ ngOnInit ~ error", error)
    });
  }

  skeletonLoad(){
    setTimeout(() => {
      this.loaded = true;
    }, 2500);
  }

}
