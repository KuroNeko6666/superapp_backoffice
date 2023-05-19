import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigapLaporComponent } from './sigap-lapor.component';

describe('SigapLaporComponent', () => {
  let component: SigapLaporComponent;
  let fixture: ComponentFixture<SigapLaporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigapLaporComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigapLaporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
