import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurierHomeComponent } from './curier-home.component';

describe('CurierHomeComponent', () => {
  let component: CurierHomeComponent;
  let fixture: ComponentFixture<CurierHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurierHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurierHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
