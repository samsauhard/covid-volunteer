import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOfferedHelpComponent } from './dashboard-offered-help.component';

describe('DashboardOfferedHelpComponent', () => {
  let component: DashboardOfferedHelpComponent;
  let fixture: ComponentFixture<DashboardOfferedHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOfferedHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOfferedHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
