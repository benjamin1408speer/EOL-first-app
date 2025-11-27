import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questions } from './questions';

describe('Questions', () => {
  let component: Questions;
  let fixture: ComponentFixture<Questions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
