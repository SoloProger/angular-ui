import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'auiListParse',
})
export class AuiListParsePipe<T> implements PipeTransform {
  public transform(
    value: { [rendererElement]: string },
    rendererElement: string,
  ): string {
    return value[rendererElement];
  }
}
