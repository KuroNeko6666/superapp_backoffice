import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintUserComponent } from './print-user.component';

describe('PrintUserComponent', () => {
  let component: PrintUserComponent;
  let fixture: ComponentFixture<PrintUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
