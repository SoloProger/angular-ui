import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'aui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CheckboxComponent),
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  public label = input('');

  public inputFormValue: boolean = false;

  public onChange = () => {};

  public onTouched = () => {};

  public touched = false;

  public disabled = false;

  public writeValue(inputFormValue: boolean): void {
    this.inputFormValue = inputFormValue;
  }

  public registerOnChange(onChange: () => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public update(event: Event): void {
    const inputFormValue = (event.target as HTMLInputElement).checked;
    this.inputFormValue = inputFormValue;
    this.onChange();
    this.onTouched();
  }
}
