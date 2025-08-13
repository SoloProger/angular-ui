import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ToastText {
  heading: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _show$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _message$: BehaviorSubject<ToastText> =
    new BehaviorSubject<ToastText>({
      heading: '',
      message: '',
    });

  public get show$(): Observable<boolean> {
    return this._show$.asObservable();
  }

  public get message$(): Observable<ToastText> {
    return this._message$.asObservable();
  }

  public showToast(message: ToastText) {
    this._show$.next(true);
    this._message$.next(message);
  }

  public delay(timeout = 2000) {
    setTimeout(() => {
      this.close();
    }, timeout);
  }

  public close(): void {
    this._show$.next(false);
  }
}
