import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekhelpComponent } from './seekhelp.component';

describe('SeekhelpComponent', () => {
  let component: SeekhelpComponent;
  let fixture: ComponentFixture<SeekhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekhelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
