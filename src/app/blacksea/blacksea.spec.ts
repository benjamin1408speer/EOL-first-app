import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blacksea } from './blacksea';

describe('Blacksea', () => {
  let component: Blacksea;
  let fixture: ComponentFixture<Blacksea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blacksea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blacksea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
