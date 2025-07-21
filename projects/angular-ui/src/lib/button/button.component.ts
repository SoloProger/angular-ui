import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  public type = 'regular';

  @Input()
  public validator = 'button';

  @Input({ transform: booleanAttribute })
  public disabled = false;

  @Input()
  public size = 'regular';

  @Input()
  public fill = 'full';

  @HostBinding('class')
  public get btnClass() {
    return { ...this.btnSize(), ...this.btnType(), ...this.btnFill(), ...this.setCursorPointer() };
  }

  public btnSize() {
    let _size = '';
    switch (this.size) {
      case 'small':
        _size = 'btn--small';
        break;
      case 'regular':
        _size = '';
        break;
      case 'large':
        _size = '';
        break;
    }
    return { [_size]: true };
  }

  public btnType() {
    let _type = '';
    switch (this.type) {
      case 'regular':
        _type = '';
        break;
      case 'primary':
        _type = 'btn--primary';
        break;
      case 'danger':
        _type = 'btn--danger';
        break;
    }
    return { [_type]: true };
  }

  public btnFill() {
    return this.fill === 'full' && !this.disabled
      ? { ['']: true }
      : { ['bg-transparent']: true };
  }

  public setCursorPointer() {
    console.log(this.disabled);
    return !this.disabled ? { ['btn--pointer']: true } : { ['btn--disabled']: true };
  }
}
