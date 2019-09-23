import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbuyhedeComponent } from './showbuyhede.component';

describe('ShowbuyhedeComponent', () => {
  let component: ShowbuyhedeComponent;
  let fixture: ComponentFixture<ShowbuyhedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbuyhedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbuyhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
