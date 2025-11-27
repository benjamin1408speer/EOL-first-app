import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResolve } from './quiz-resolve';

describe('QuizResolve', () => {
  let component: QuizResolve;
  let fixture: ComponentFixture<QuizResolve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizResolve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizResolve);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
