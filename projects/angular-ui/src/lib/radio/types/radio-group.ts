import { FormControl } from '@angular/forms';

export interface RadioGroup {
  value: string;
  label: string;
}

export type RadioGroupControl = {
  value: FormControl<string | null>;
};
