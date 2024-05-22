import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { ProgramsType } from 'src/app/models/programs-type.model';
import { ProgramsTypeService } from 'src/app/services/programs-type.service';
@Component({
  selector: 'app-training-programs',
  templateUrl: './training-programs.component.html',
  styleUrls: ['./training-programs.component.scss'],
  standalone: true,
  imports: [ IonGrid,IonCol, IonRow, IonAvatar, IonText, IonButton, IonIcon, IonButtons, CommonModule]
})
export class TrainingProgramsComponent  implements OnInit {

  programsTypes$: Observable<ProgramsType[]> | undefined;
  constructor(private programsTypeService: ProgramsTypeService) { }

  ngOnInit() {
    this.programsTypes$ = this.programsTypeService.getProgramsType();
  }

}
