import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-meal-planning',
  templateUrl: './meal-planning.page.html',
  styleUrls: ['./meal-planning.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonText, CommonModule, FormsModule,  HeaderComponent]
})
export class MealPlanningPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Meal Planning Page');
  }

}
