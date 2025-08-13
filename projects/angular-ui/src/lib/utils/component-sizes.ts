import {
  ComponentSizeType,
  ComponentSizeEnum,
} from '../types/component-size.type';
import { ComponentTypeType } from '../types/component-type.type';
import { AttributeBindType } from '../types/attribute-bind.type';

export function componentSizes(
  componentSize: ComponentSizeType,
  componentType: ComponentTypeType,
): AttributeBindType {
  let size = '';
  switch (componentSize) {
    case ComponentSizeEnum.SMALL:
      size = `${componentType}-small`;
      break;
    case ComponentSizeEnum.MEDIUM:
      size = `${componentType}-medium`;
      break;
    case ComponentSizeEnum.LARGE:
      size = `${componentType}-large`;
      break;
  }
  return { [size]: true };
}
