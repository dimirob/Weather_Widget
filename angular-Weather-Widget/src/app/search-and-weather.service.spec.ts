import { TestBed } from '@angular/core/testing';

import { SearchAndWeatherService } from './search-and-weather.service';

describe('SearchAndWeatherService', () => {
  let service: SearchAndWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAndWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
