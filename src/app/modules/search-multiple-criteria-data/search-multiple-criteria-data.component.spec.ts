import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMultipleCriteriaDataComponent } from './search-multiple-criteria-data.component';

describe('SearchMultipleCriteriaDataComponent', () => {
  let component: SearchMultipleCriteriaDataComponent;
  let fixture: ComponentFixture<SearchMultipleCriteriaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMultipleCriteriaDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMultipleCriteriaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
