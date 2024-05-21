import { Component, OnInit } from '@angular/core';
import { IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons} from '@ionic/angular/standalone';
@Component({
  selector: 'app-training-programs',
  templateUrl: './training-programs.component.html',
  styleUrls: ['./training-programs.component.scss'],
  standalone: true,
  imports: [ IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons]
})
export class TrainingProgramsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('TrainingProgramsComponent ngOnInit');
  }

}
