import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { componentSizes } from '../utils/component-sizes';
import { ComponentVariantType } from '../types/component-variant.type';
import { ComponentSizeType } from '../types/component-size.type';
import { componentVariants } from '../utils/component-variants';
import { componentCursorPointer } from '../utils/component-cursor-pointer';
import { ButtonType } from './types/buttonType';

@Component({
  selector: 'aui-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public variant = input<ComponentVariantType>('primary');
  public type = input<ButtonType>('button');
  public disabled = input(false, { transform: booleanAttribute });
  public size = input<ComponentSizeType>('medium');
  public fill = input<'full'>('full');

  @HostBinding('class')
  public get btnClass() {
    return {
      ...componentSizes(this.size(), 'aui-button'),
      ...componentVariants(this.variant(), 'aui-button'),
      ...componentCursorPointer(this.disabled(), 'aui-button'),
      ...this.btnFill(),
    };
  }

  public btnFill() {
    return this.fill() === 'full' && !this.disabled
      ? { ['']: true }
      : { ['bg-transparent']: true };
  }
}
