import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'aui-sidebar',
  templateUrl: 'aui-sidebar.component.html',
  styleUrl: 'aui-sidebar.component.scss',
  imports: [NgClass],
})
export class AuiSidebarComponent {
  public isOpenClass = true;

  public openClose(): void {
    this.isOpenClass = !this.isOpenClass;
  }
}
