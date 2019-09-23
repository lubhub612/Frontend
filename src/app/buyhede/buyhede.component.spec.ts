import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyhedeComponent } from './buyhede.component';

describe('BuyhedeComponent', () => {
  let component: BuyhedeComponent;
  let fixture: ComponentFixture<BuyhedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyhedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
