import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrloginComponent } from './prlogin.component';

describe('PrloginComponent', () => {
  let component: PrloginComponent;
  let fixture: ComponentFixture<PrloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
