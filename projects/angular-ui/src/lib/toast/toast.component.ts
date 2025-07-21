import {Component, OnInit} from '@angular/core';
import {ToastService} from './toast.service';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.component.html',
  standalone: true,
})
export class ToastComponent implements OnInit {
  public isShow: boolean = false;
  public message: any = null;

  constructor(private toastService: ToastService) {
  }

  ngOnInit() {
    combineLatest(
      this.toastService.show$,
      this.toastService.message$
    ).subscribe(([show, message]) => {
      this.isShow = show;
      this.message = message;
      this.toastService.delay();
    });
  }
}
