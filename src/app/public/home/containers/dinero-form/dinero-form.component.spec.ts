import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineroFormComponent } from './dinero-form.component';

describe('DineroFormComponent', () => {
  let component: DineroFormComponent;
  let fixture: ComponentFixture<DineroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DineroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DineroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
