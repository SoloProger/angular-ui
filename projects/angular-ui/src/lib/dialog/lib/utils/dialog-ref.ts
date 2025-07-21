import { Observable, Subject } from 'rxjs';

export class DialogRef {
  public close(result?: any): void {
    this._afterClosed.next(result);
  }

  private readonly _afterClosed = new Subject<any>();

  public afterClosed: Observable<any> = this._afterClosed.asObservable();
}
