import {
  Component,
  Input,
  Output,
  EventEmitter,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Meetings } from './meetings.interface';
import { DateTime, Info, Interval } from 'luxon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class CalendarComponent {
  @Input() meetings!: Signal<Meetings>;
  @Output() dateChange = new EventEmitter<string>();

  today: Signal<DateTime> = signal(DateTime.local());
  firstDayOfActiveMonth: WritableSignal<DateTime> = signal(
    this.today().startOf('month'),
  );
  activeDay: WritableSignal<DateTime | null> = signal(null);
  weekDays: Signal<string[]> = signal(Info.weekdays('short'));
  daysOfMonth: Signal<DateTime[]> = computed(() => {
    return Interval.fromDateTimes(
      this.firstDayOfActiveMonth().startOf('week'),
      this.firstDayOfActiveMonth().endOf('month').endOf('week'),
    )
      .splitBy({ day: 1 })
      .map((d) => d.start!);
  });
  DATE_MED = DateTime.DATE_MED;
  activeDayMeetings: Signal<string[]> = computed(() => {
    const activeDay = this.activeDay();
    if (!activeDay) {
      return [];
    }
    const activeDayISO = activeDay.toISODate();
    return activeDayISO ? this.meetings()[activeDayISO] || [] : [];
  });

  goToPreviousMonth(): void {
    this.firstDayOfActiveMonth.set(this.firstDayOfActiveMonth().minus({ month: 1 }));
  }

  goToNextMonth(): void {
    this.firstDayOfActiveMonth.set(this.firstDayOfActiveMonth().plus({ month: 1 }));
  }

  goToToday(): void {
    this.firstDayOfActiveMonth.set(this.today().startOf('month'));
  }

  selectDate(date: DateTime): void {
    this.activeDay.set(date);
    const isoDate = date.toISODate();
    if (isoDate) {
      this.dateChange.emit(isoDate);
    }
  }
}

