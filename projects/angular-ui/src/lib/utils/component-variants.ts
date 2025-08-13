import {
  ComponentVariantType,
  ComponentVariantEnum,
} from '../types/component-variant.type';
import { ComponentTypeType } from '../types/component-type.type';
import { AttributeBindType } from '../types/attribute-bind.type';

export function componentVariants(
  componentVariant: ComponentVariantType,
  componentType: ComponentTypeType,
): AttributeBindType {
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
