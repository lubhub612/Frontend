import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumenexhedComponent } from './lumenexhed.component';

describe('LumenexhedComponent', () => {
  let component: LumenexhedComponent;
  let fixture: ComponentFixture<LumenexhedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumenexhedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumenexhedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
