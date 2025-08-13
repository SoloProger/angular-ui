import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { componentSizes } from '../utils/component-sizes';
import { ComponentVariantType } from '../types/component-variant.type';
import { ComponentSizeType } from '../types/component-size.type';
import { componentVariants } from '../utils/component-variants';
import { componentCursorPointer } from '../utils/component-cursor-pointer';

@Component({
  selector: 'aui-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  public variant: ComponentVariantType = 'secondary';

  @Input()
  public validator = 'button';

  @Input({ transform: booleanAttribute })
  public disabled = false;

  @Input()
  public size: ComponentSizeType = 'medium';

  @Input()
  public fill = 'full';

  @HostBinding('class')
  public get btnClass() {
    return {
      ...componentSizes(this.size, 'button'),
      ...componentVariants(this.variant, 'button'),
      ...this.btnFill(),
      ...componentCursorPointer(this.disabled, 'button'),
    };
  }

  public btnFill() {
    return this.fill === 'full' && !this.disabled
      ? { ['']: true }
      : { ['bg-transparent']: true };
  }
}
