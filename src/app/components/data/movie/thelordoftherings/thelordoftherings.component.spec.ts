import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThelordoftheringsComponent } from './thelordoftherings.component';

describe('ThelordoftheringsComponent', () => {
  let component: ThelordoftheringsComponent;
  let fixture: ComponentFixture<ThelordoftheringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThelordoftheringsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThelordoftheringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
