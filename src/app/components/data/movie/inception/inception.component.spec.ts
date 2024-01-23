import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InceptionComponent } from './inception.component';

describe('InceptionComponent', () => {
  let component: InceptionComponent;
  let fixture: ComponentFixture<InceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InceptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
