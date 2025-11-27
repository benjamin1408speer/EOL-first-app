import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mittelmeer } from './mittelmeer';

describe('Mittelmeer', () => {
  let component: Mittelmeer;
  let fixture: ComponentFixture<Mittelmeer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mittelmeer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mittelmeer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
