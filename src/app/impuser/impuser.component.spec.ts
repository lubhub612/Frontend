import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuserComponent } from './impuser.component';

describe('ImpuserComponent', () => {
  let component: ImpuserComponent;
  let fixture: ComponentFixture<ImpuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
