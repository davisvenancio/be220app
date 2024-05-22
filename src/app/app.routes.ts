import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'fitness-checkup',
    loadComponent: () => import('./pages/fitness-checkup/fitness-checkup.page').then( m => m.FitnessCheckupPage)
  },
  {
    path: 'meal-planning',
    loadComponent: () => import('./pages/meal-planning/meal-planning.page').then( m => m.MealPlanningPage)
  },
  {
    path: 'nutrition-guide',
    loadComponent: () => import('./pages/nutrition-guide/nutrition-guide.page').then( m => m.NutritionGuidePage)
  },
  {
    path: 'supplementation',
    loadComponent: () => import('./pages/supplementation/supplementation.page').then( m => m.SupplementationPage)
  },
];
