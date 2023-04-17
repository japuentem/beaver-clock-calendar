import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClockCalendarPage } from './clock-calendar.page';

describe('ClockCalendarPage', () => {
  let component: ClockCalendarPage;
  let fixture: ComponentFixture<ClockCalendarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClockCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
