import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureImplementsDisclaimerComponent } from './future-implements-disclaimer.component';

describe('FutureImplementsDisclaimerComponent', () => {
  let component: FutureImplementsDisclaimerComponent;
  let fixture: ComponentFixture<FutureImplementsDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureImplementsDisclaimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureImplementsDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
