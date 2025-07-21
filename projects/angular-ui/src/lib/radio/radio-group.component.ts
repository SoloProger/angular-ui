import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR, ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { RadioGroup, RadioGroupControl } from './types/radio-group';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioGroupComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgForOf
  ]
})
export class RadioGroupComponent implements ControlValueAccessor, OnInit {
  @Input({ required: true })
  public radioGroup: RadioGroup[] = [];

  @Input()
  public isColumn?: boolean = false;

  public onChange = (value: unknown) => {};

  public onTouched = () => {};

  public readonly form: FormGroup = new FormGroup<RadioGroupControl>({
    value: new FormControl<string>(''),
  });

  constructor(private readonly destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        debounceTime(200),
        tap(({ value }) => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  writeValue(value: string): void {
    this.form.patchValue({ value }, { emitEvent: false });
  }
}
