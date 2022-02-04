import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailSuccessModalComponent } from './fail-success-modal.component';

describe('FailSuccessModalComponent', () => {
  let component: FailSuccessModalComponent;
  let fixture: ComponentFixture<FailSuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailSuccessModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
