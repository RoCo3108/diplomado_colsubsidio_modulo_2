import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDigimonesComponent } from './table-digimones.component';

describe('TableDigimonesComponent', () => {
  let component: TableDigimonesComponent;
  let fixture: ComponentFixture<TableDigimonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDigimonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDigimonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
