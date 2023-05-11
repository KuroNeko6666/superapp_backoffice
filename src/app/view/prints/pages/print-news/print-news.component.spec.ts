import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintNewsComponent } from './print-news.component';

describe('PrintNewsComponent', () => {
  let component: PrintNewsComponent;
  let fixture: ComponentFixture<PrintNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
