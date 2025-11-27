import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arctic } from './arctic';

describe('Arctic', () => {
  let component: Arctic;
  let fixture: ComponentFixture<Arctic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arctic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arctic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
