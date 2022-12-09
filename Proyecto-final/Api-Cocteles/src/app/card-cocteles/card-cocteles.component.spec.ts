import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoctelesComponent } from './card-cocteles.component';

describe('CardCoctelesComponent', () => {
  let component: CardCoctelesComponent;
  let fixture: ComponentFixture<CardCoctelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCoctelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCoctelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
