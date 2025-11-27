import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Antarctic } from './antarctic';

describe('Antarctic', () => {
  let component: Antarctic;
  let fixture: ComponentFixture<Antarctic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Antarctic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Antarctic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
