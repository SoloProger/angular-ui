import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from '../../../../angular-ui/src/lib/input/input/input.component';
import { AccordionComponent } from '../../../../angular-ui/src/lib/accordion/accordion.component';
import { DatePickerComponent } from '../../../../angular-ui/src/lib/date-picker/date-picker.component';
import { ButtonComponent } from '../../../../angular-ui/src/lib/button/button.component';
import { CheckboxComponent } from '../../../../angular-ui/src/lib/checkbox/checkbox.component';
import { InputWithFloatingLabelComponent } from '../../../../angular-ui/src/lib/input/input-with-floating-label/input-with-floating-label.component';
import { RadioGroupComponent } from '../../../../angular-ui/src/lib/radio/radio-group.component';
import { SelectComponent } from '../../../../angular-ui/src/lib/select/select.component';
import { TextareaComponent } from '../../../../angular-ui/src/lib/textarea/textarea.component';
import { AppComponent } from '../../app/app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        InputComponent,
        AccordionComponent,
        DatePickerComponent,
        ButtonComponent,
        CheckboxComponent,
        InputWithFloatingLabelComponent,
        RadioGroupComponent,
        SelectComponent,
        TextareaComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
