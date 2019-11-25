import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDOperationsComponent } from './crud-operations.component';

describe('CRUDOperationsComponent', () => {
  let component: CRUDOperationsComponent;
  let fixture: ComponentFixture<CRUDOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
