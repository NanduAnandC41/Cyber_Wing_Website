import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCyberBullyComponent } from './list-of-cyber-bully.component';

describe('ListOfCyberBullyComponent', () => {
  let component: ListOfCyberBullyComponent;
  let fixture: ComponentFixture<ListOfCyberBullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCyberBullyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCyberBullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
