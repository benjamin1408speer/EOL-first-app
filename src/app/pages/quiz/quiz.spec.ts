import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz } from './quiz';

describe('Quiz', () => {
  let component: Quiz;
  let fixture: ComponentFixture<Quiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quiz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
