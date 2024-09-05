import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyWineComponent } from './buy-wine.component';

describe('BuyWineComponent', () => {
  let component: BuyWineComponent;
  let fixture: ComponentFixture<BuyWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyWineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
