import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnwickComponent } from './johnwick.component';

describe('JohnwickComponent', () => {
  let component: JohnwickComponent;
  let fixture: ComponentFixture<JohnwickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohnwickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JohnwickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
