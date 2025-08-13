import { ComponentType } from '../types/ComponentType';

export function componentCursorPointer(
  disabled: boolean,
  componentType: ComponentType,
) {
  return !disabled
    ? { [`${componentType}-pointer`]: true }
    : { [`${componentType}-disabled`]: true };
}
