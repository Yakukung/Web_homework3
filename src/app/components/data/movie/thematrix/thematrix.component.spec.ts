import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematrixComponent } from './thematrix.component';

describe('ThematrixComponent', () => {
  let component: ThematrixComponent;
  let fixture: ComponentFixture<ThematrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThematrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThematrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
