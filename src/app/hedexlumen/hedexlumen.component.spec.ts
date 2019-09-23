import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedexlumenComponent } from './hedexlumen.component';

describe('HedexlumenComponent', () => {
  let component: HedexlumenComponent;
  let fixture: ComponentFixture<HedexlumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedexlumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedexlumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
