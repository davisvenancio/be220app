import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutritionGuidePage } from './nutrition-guide.page';

describe('NutritionGuidePage', () => {
  let component: NutritionGuidePage;
  let fixture: ComponentFixture<NutritionGuidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
