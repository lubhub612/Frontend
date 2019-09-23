import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsellhedeComponent } from './showsellhede.component';

describe('ShowsellhedeComponent', () => {
  let component: ShowsellhedeComponent;
  let fixture: ComponentFixture<ShowsellhedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsellhedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsellhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
