import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redsea } from './redsea';

describe('Redsea', () => {
  let component: Redsea;
  let fixture: ComponentFixture<Redsea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Redsea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Redsea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
