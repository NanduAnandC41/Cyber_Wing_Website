import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCdrRequestsComponent } from './daily-cdr-requests.component';

describe('DailyCdrRequestsComponent', () => {
  let component: DailyCdrRequestsComponent;
  let fixture: ComponentFixture<DailyCdrRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCdrRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCdrRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
