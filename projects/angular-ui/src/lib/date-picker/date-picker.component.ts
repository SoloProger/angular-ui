import {Component} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {calendar, days} from './constants/calendar';
import {chunk} from './utils/chunk';
import {range} from './utils/range';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: 'date-picker.component.scss',
  imports: [
    NgClass,
    NgForOf
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  public currentDay = this.toDay();
  public currentMonth = calendar[1];
  public days = days;

  public date: unknown = null;

  public isDisabled = false;

  public onChange = (date: unknown) => {
  };

  public onTouch = () => {
  };

  public writeValue(date: unknown): void {
    this.date = date;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onChange(fn);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public getWeeks(days: number): number[][] {
    return chunk(range(1, days), 7);
  }

  private handlerDate(day: number) {
    const date = new Date(
      2024,
      this.currentMonth.monthCount - 1,
      day,
    ).toISOString();
  }

  public checkToday(day: number): boolean {
    return this.currentDay === day;
  }

  public setCurrentDay(day: number) {
    this.currentDay = day;
  }

  public setNextMonth() {
    if (this.currentMonth.monthCount === 12) {
      this.currentMonth = calendar[1];
    } else {
      this.currentMonth = calendar[this.currentMonth.monthCount + 1];
    }
  }

  public setPrevMonth() {
    if (this.currentMonth.monthCount === 1) {
      this.currentMonth = calendar[12];
    } else {
      this.currentMonth = calendar[this.currentMonth.monthCount - 1];
    }
  }

  private getLocaleDate(value = Date.now()): string {
    return new Date(value).toLocaleDateString('sv');
  }

  private toDay(): number {
    let today = this.getLocaleDate().split('-')[2];
    if (today.startsWith('0')) {
      today = today.split('0')[1];
    }
    return +today;
  }
}
