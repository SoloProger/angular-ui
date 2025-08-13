import { Observable, Subject } from 'rxjs';

export class DialogRef<T = unknown> {
  private readonly _afterClosed = new Subject<T>();

  public readonly afterClosed: Observable<T> = this._afterClosed.asObservable();

  public close(result?: T): void {
    this._afterClosed.next(result!);
    this._afterClosed.complete();
  }
}
