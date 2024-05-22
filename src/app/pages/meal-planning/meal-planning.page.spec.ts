import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealPlanningPage } from './meal-planning.page';

describe('MealPlanningPage', () => {
  let component: MealPlanningPage;
  let fixture: ComponentFixture<MealPlanningPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
