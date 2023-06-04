import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOperatorComponent } from './print-operator.component';

describe('PrintOperatorComponent', () => {
  let component: PrintOperatorComponent;
  let fixture: ComponentFixture<PrintOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
