import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesInvestigationDataComponent } from './cases-investigation-data.component';

describe('CasesInvestigationDataComponent', () => {
  let component: CasesInvestigationDataComponent;
  let fixture: ComponentFixture<CasesInvestigationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesInvestigationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesInvestigationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
