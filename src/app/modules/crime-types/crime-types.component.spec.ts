import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeTypesComponent } from './crime-types.component';

describe('CrimeTypesComponent', () => {
  let component: CrimeTypesComponent;
  let fixture: ComponentFixture<CrimeTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
