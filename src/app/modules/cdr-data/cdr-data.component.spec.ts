import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDRDataComponent } from './cdr-data.component';

describe('CDRDataComponent', () => {
  let component: CDRDataComponent;
  let fixture: ComponentFixture<CDRDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDRDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDRDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
