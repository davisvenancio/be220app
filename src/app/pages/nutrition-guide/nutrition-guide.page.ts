import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-nutrition-guide',
  templateUrl: './nutrition-guide.page.html',
  styleUrls: ['./nutrition-guide.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonText, CommonModule, FormsModule,  HeaderComponent]
})
export class NutritionGuidePage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Nutrition Guide Page');
  }

}
