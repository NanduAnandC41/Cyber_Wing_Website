import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCafFormsComponent } from './list-of-caf-forms.component';

describe('ListOfCafFormsComponent', () => {
  let component: ListOfCafFormsComponent;
  let fixture: ComponentFixture<ListOfCafFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCafFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCafFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
