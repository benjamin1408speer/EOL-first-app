import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Water } from './water';
import { provideRouter, ActivatedRoute, UrlSegment } from '@angular/router';
import { DataService } from '../data-service';

/*
describe('Water Component', () => {
  let component: Water;
  let fixture: ComponentFixture<Water>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Water],
      providers: [
        provideRouter([]), // Modern way to provide router
        // ActivatedRoute Mock
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              url: [new UrlSegment('oceans', {}), new UrlSegment('pacific', {})],
              pathFromRoot: [
                  { url: [] },
                  { url: [new UrlSegment('oceans', {}), new UrlSegment('pacific', {})] }
              ]
            }
          }
        },
        DataService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Water);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // Optional, falls ngOnInit Probleme macht
  });

  it('sollte erstellt werden', () => {
    expect(component).toBeTruthy();
  });
});
*/
