import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarmainComponent } from './searchbarmain.component';

describe('SearchbarmainComponent', () => {
  let component: SearchbarmainComponent;
  let fixture: ComponentFixture<SearchbarmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchbarmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchbarmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
