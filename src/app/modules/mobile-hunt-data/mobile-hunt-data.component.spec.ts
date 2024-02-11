import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHuntDataComponent } from './mobile-hunt-data.component';

describe('MobileHuntDataComponent', () => {
  let component: MobileHuntDataComponent;
  let fixture: ComponentFixture<MobileHuntDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHuntDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHuntDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
