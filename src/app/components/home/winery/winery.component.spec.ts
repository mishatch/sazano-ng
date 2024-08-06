import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineryComponent } from './winery.component';

describe('WineryComponent', () => {
  let component: WineryComponent;
  let fixture: ComponentFixture<WineryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WineryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
