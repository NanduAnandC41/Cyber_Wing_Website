import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfNcrpComponent } from './list-of-ncrp.component';

describe('ListOfNcrpComponent', () => {
  let component: ListOfNcrpComponent;
  let fixture: ComponentFixture<ListOfNcrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfNcrpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfNcrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
