import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDashboardComponent } from './print-dashboard.component';

describe('PrintDashboardComponent', () => {
  let component: PrintDashboardComponent;
  let fixture: ComponentFixture<PrintDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
