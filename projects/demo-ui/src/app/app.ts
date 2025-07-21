import {Component} from '@angular/core';
import {InputComponent} from '../../../angular-ui/src/lib/input/input/input.component';
import {AccordionComponent} from '../../../angular-ui/src/lib/accordion/accordion.component';
import {DatePickerComponent} from '../../../angular-ui/src/lib/date-picker/date-picker.component';
import {ButtonComponent} from '../../../angular-ui/src/lib/button/button.component';
import {CheckboxComponent} from '../../../angular-ui/src/lib/checkbox/checkbox.component';
import {
  InputWithFloatingLabelComponent
} from '../../../angular-ui/src/lib/input/input-with-floating-label/input-with-floating-label.component';
import {RadioGroupComponent} from '../../../angular-ui/src/lib/radio/radio-group.component';
import {SelectComponent} from '../../../angular-ui/src/lib/select/select.component';
import {TextareaComponent} from '../../../angular-ui/src/lib/textarea/textarea.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [InputComponent, AccordionComponent, DatePickerComponent, ButtonComponent, CheckboxComponent, InputWithFloatingLabelComponent, RadioGroupComponent, SelectComponent, TextareaComponent]
})
export class App {
}
