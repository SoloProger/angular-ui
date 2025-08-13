import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInsertion]',
  standalone: false,
})
export class InsertionDirective {
  public viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
}
