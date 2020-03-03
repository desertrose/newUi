import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSettlementComponent } from './pre-settlement.component';

describe('PreSettlementComponent', () => {
  let component: PreSettlementComponent;
  let fixture: ComponentFixture<PreSettlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreSettlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
