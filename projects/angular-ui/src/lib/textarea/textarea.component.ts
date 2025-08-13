import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyValuePipe, NgClass, NgForOf, NgIf } from '@angular/common';

enum FormValidationMessages {
  required = 'Обязательное поле',
  minlength = 'Минимальная длина',
  maxlength = 'Максимальная длина',
}

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextareaComponent),
    },
  ],
  imports: [NgClass, KeyValuePipe, NgIf, NgForOf],
})
export class TextareaComponent implements ControlValueAccessor {
  @Input()
  public label: string = '';

  @Input()
  public type: string = 'text';

  @Input()
  public placeholder: string = '';

  @Input()
  public validation?: unknown;

  @Input()
  public rows: number = 10;

  @Input()
  public cols: number = 40;

  public inputFormValue: string = '';

  public onChange = (inputFormValue: string) => {};

  public onTouched = () => {};

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

  public getErrorMessage(error: unknown): string {
    const errorMessage =
      FormValidationMessages[
        (error as { key: string }).key as keyof typeof FormValidationMessages
      ];

    if (
      (error as { key: string }).key === 'minlength' ||
      (error as { key: string }).key === 'maxlength'
    ) {
      return `${errorMessage}`;
    }

    return errorMessage;
  }
}
