import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellDataComponent } from './cell-data.component';

describe('CellDataComponent', () => {
  let component: CellDataComponent;
  let fixture: ComponentFixture<CellDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
