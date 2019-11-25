import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDInputComponent } from './crud-input.component';

describe('CRUDInputComponent', () => {
  let component: CRUDInputComponent;
  let fixture: ComponentFixture<CRUDInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
