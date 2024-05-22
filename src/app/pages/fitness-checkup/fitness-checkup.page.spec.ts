import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FitnessCheckupPage } from './fitness-checkup.page';

describe('FitnessCheckupPage', () => {
  let component: FitnessCheckupPage;
  let fixture: ComponentFixture<FitnessCheckupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessCheckupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
