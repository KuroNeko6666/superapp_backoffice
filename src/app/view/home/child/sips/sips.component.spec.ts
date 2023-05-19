import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipsComponent } from './sips.component';

describe('SipsComponent', () => {
  let component: SipsComponent;
  let fixture: ComponentFixture<SipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
