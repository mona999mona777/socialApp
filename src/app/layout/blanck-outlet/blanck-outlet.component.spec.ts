import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanckOutletComponent } from './blanck-outlet.component';

describe('BlanckOutletComponent', () => {
  let component: BlanckOutletComponent;
  let fixture: ComponentFixture<BlanckOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlanckOutletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlanckOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
