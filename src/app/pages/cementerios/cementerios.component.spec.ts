import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CementeriosComponent } from './cementerios.component';

describe('CementeriosComponent', () => {
  let component: CementeriosComponent;
  let fixture: ComponentFixture<CementeriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementeriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementeriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
