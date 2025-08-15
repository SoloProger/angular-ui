import { Component, effect, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'aui-accordion[title]',
  templateUrl: 'accordion.component.html',
  styleUrl: 'accordion.component.scss',
  imports: [NgClass],
})
export class AccordionComponent {
  public title = input.required<string>();
  public isOpen = input(false);
  public openCloseToggle = signal(false);

  constructor() {
    effect(() => {
      this.openCloseToggle.set(this.isOpen());
    });
  }

  public toggle(): void {
    this.openCloseToggle.set(!this.openCloseToggle());
  }
}
