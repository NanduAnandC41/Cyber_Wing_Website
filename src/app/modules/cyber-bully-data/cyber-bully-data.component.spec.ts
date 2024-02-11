import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberBullyDataComponent } from './cyber-bully-data.component';

describe('CyberBullyDataComponent', () => {
  let component: CyberBullyDataComponent;
  let fixture: ComponentFixture<CyberBullyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberBullyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberBullyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
