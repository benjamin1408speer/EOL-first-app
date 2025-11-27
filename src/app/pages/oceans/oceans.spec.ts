import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oceans } from './oceans';

describe('Oceans', () => {
  let component: Oceans;
  let fixture: ComponentFixture<Oceans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oceans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oceans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
