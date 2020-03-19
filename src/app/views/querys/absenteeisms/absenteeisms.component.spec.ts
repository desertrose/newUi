import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenteeismsComponent } from './absenteeisms.component';

describe('AbsenteeismsComponent', () => {
  let component: AbsenteeismsComponent;
  let fixture: ComponentFixture<AbsenteeismsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenteeismsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenteeismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
