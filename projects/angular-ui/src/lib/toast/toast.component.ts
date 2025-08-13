import { Component, inject, OnInit } from '@angular/core';
import { ToastService, ToastText } from './toast.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'aui-toast',
  templateUrl: 'toast.component.html',
  standalone: true,
})
export class ToastComponent implements OnInit {
  public isShow: boolean = false;
  public message: ToastText | null = null;

  private toastService = inject(ToastService);

  ngOnInit() {
    combineLatest(
      this.toastService.show$,
      this.toastService.message$,
    ).subscribe(([show, message]) => {
      this.isShow = show;
      this.message = message;
      this.toastService.delay();
    });
  }
}
