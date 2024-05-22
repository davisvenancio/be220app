import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addSharp, playCircleSharp } from 'ionicons/icons';
import { Observable } from 'rxjs';
import { TrainingType } from 'src/app/models/training-type.model';
import { TrainingTypeService } from 'src/app/services/training-type.service';
@Component({
  selector: 'app-personal-online',
  templateUrl: './personal-online.component.html',
  styleUrls: ['./personal-online.component.scss'],
  standalone: true,
  imports: [ IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons, CommonModule]
})
export class PersonalOnlineComponent  implements OnInit {
  
  trainingTypes$: Observable<TrainingType[]> | undefined;
  
  constructor(private trainingTypeService: TrainingTypeService) { 
    addIcons({ addSharp,playCircleSharp });
  }

  ngOnInit() {
    this.trainingTypes$ = this.trainingTypeService.getTrainingTypes();
  } 

}
