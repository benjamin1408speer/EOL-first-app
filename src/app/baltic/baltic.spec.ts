import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baltic } from './baltic';

describe('Baltic', () => {
  let component: Baltic;
  let fixture: ComponentFixture<Baltic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Baltic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Baltic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
