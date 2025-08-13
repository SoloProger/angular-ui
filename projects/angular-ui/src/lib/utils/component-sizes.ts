import { ComponentSize, ComponentSizeEnum } from '../types/ComponentSize';
import { ComponentType } from '../types/ComponentType';

export function componentSizes(
  componentSize: ComponentSize,
  componentType: ComponentType,
) {
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
