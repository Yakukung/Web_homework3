import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadpoolComponent } from './deadpool.component';

describe('DeadpoolComponent', () => {
  let component: DeadpoolComponent;
  let fixture: ComponentFixture<DeadpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadpoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeadpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
