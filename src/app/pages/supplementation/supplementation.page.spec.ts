import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplementationPage } from './supplementation.page';

describe('SupplementationPage', () => {
  let component: SupplementationPage;
  let fixture: ComponentFixture<SupplementationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
