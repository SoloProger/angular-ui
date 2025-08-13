import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-accordion[title]',
  templateUrl: 'accordion.component.html',
  imports: [NgIf],
})
export class AccordionComponent {
  @Input()
  public title!: string;

  @Input()
  public isToggle: boolean = false;

  public toggle() {
    this.isToggle = !this.isToggle;
  }
}
