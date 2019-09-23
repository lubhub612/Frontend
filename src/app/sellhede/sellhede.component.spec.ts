import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellhedeComponent } from './sellhede.component';

describe('SellhedeComponent', () => {
  let component: SellhedeComponent;
  let fixture: ComponentFixture<SellhedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellhedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
