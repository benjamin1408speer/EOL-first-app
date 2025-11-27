import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atlantic } from './atlantic';

describe('Atlantic', () => {
  let component: Atlantic;
  let fixture: ComponentFixture<Atlantic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atlantic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atlantic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
