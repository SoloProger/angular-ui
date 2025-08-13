import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from './types/option';
import { OutsideClickDirective } from '../directives/outside-click.directive';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
  imports: [OutsideClickDirective, NgClass, NgIf, NgForOf],
})
export class SelectComponent implements ControlValueAccessor {
  @Input({ required: true })
  public options!: Option[];

  @Input({ required: true })
  public label!: string;

  @Input()
  public emptyMessage?: string;

  @Input()
  public placeholder: string = 'Выберите';

  public open: boolean = false;

  public selected: string = '';

  public onChange = (selected: string) => {};

  public onTouched = () => {};

  public disabled = false;

  public writeValue(selected: string): void {
    this.selected = selected;
  }

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public selectValue(option: Option): void {
    this.selected = option[this.label];
    this.open = false;
    this.onChange(option['value']);
    this.onTouched();
  }

  public openCloseSelect(): void {
    this.open = !this.open;
  }
}
