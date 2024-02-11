import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RationCardDetailsComponent } from './ration-card-details.component';

describe('RationCardDetailsComponent', () => {
  let component: RationCardDetailsComponent;
  let fixture: ComponentFixture<RationCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RationCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RationCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
