import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectAccountDetailsComponent } from './suspect-account-details.component';

describe('SuspectAccountDetailsComponent', () => {
  let component: SuspectAccountDetailsComponent;
  let fixture: ComponentFixture<SuspectAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspectAccountDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspectAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
