import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedtransfComponent } from './hedtransf.component';

describe('HedtransfComponent', () => {
  let component: HedtransfComponent;
  let fixture: ComponentFixture<HedtransfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedtransfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedtransfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
