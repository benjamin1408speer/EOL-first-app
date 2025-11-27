import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacific } from './pacific';

describe('Pacific', () => {
  let component: Pacific;
  let fixture: ComponentFixture<Pacific>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pacific]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pacific);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
