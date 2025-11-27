import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nordsee } from './nordsee';

describe('Nordsee', () => {
  let component: Nordsee;
  let fixture: ComponentFixture<Nordsee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nordsee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nordsee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
