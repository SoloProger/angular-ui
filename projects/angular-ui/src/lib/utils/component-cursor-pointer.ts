import { ComponentTypeType } from '../types/component-type.type';
import { AttributeBindType } from '../types/attribute-bind.type';

export function componentCursorPointer(
  disabled: boolean,
  componentType: ComponentTypeType,
): AttributeBindType {
  return !disabled
    ? { [`${componentType}-pointer`]: true }
    : { [`${componentType}-disabled`]: true };
}
