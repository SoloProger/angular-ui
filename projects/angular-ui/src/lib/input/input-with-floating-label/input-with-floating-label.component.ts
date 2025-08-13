import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-with-floating-label',
  templateUrl: './input-with-floating-label.component.html',
  styleUrl: './input-with-floating-label.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputWithFloatingLabelComponent),
    },
  ],
})
export class InputWithFloatingLabelComponent implements ControlValueAccessor {
  @Input()
  public label: string = '';

  @Input()
  public type: string = 'text';

  @Input()
  public placeholder: string = '';

  public inputFormValue: string = '';

  public onChange = (inputFormValue: string) => {};

  public onTouched = () => {};

  public touched = false;

  public disabled = false;

  public writeValue(inputFormValue: string): void {
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
    const inputFormValue = (event.target as HTMLInputElement).value;
    this.inputFormValue = inputFormValue;
    this.onChange(inputFormValue);
    this.onTouched();
  }
}
