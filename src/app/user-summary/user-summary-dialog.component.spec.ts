import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSummaryDialog } from './user-summary-dialog.component';

describe('UserSummaryComponent', () => {
  let component: UserSummaryDialog;
  let fixture: ComponentFixture<UserSummaryDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSummaryDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSummaryDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
