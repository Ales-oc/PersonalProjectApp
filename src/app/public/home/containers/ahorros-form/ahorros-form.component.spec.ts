import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosFormComponent } from './ahorros-form.component';

describe('AhorrosFormComponent', () => {
  let component: AhorrosFormComponent;
  let fixture: ComponentFixture<AhorrosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorrosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
