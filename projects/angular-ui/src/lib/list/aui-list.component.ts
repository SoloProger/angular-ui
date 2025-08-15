import { Component, input } from '@angular/core';
import { AuiListParsePipe } from '../pipes/list-parse.pipe';

@Component({
  selector: 'aui-list',
  templateUrl: 'aui-list.component.html',
  styleUrl: 'aui-list.component.scss',
  imports: [AuiListParsePipe],
})
export class AuiListComponent<T> {
  public elements = input<T[] | []>([]);
  public renderElement = input<string>('');
}
