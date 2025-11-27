import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indic } from './indic';

describe('Indic', () => {
  let component: Indic;
  let fixture: ComponentFixture<Indic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
