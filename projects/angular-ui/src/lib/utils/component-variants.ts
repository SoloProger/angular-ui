import {
  ComponentVariant,
  ComponentVariantEnum,
} from '../types/ComponentVariant';
import { ComponentType } from '../types/ComponentType';

export function componentVariants(
  componentVariant: ComponentVariant,
  componentType: ComponentType,
) {
  let type = '';
  switch (componentVariant) {
    case ComponentVariantEnum.DANGER:
      type = `${componentType}-danger`;
      break;
    case ComponentVariantEnum.SECONDARY:
      type = `${componentType}-secondary`;
      break;
    case ComponentVariantEnum.PRIMARY:
      type = `${componentType}-primary`;
      break;
  }
  return { [type]: true };
}
