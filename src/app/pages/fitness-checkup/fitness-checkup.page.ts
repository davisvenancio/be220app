import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-fitness-checkup',
  templateUrl: './fitness-checkup.page.html',
  styleUrls: ['./fitness-checkup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonText, CommonModule, FormsModule, HeaderComponent]
})
export class FitnessCheckupPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Fitness Checkup Page');
  }

}
