import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({selector: '[appOutsideClick]'})
export class OutsideClickDirective implements OnInit, OnDestroy {
  @Input({required: true})
  public appOutsideClick!: boolean;

  @Output()
  public outsideClick: EventEmitter<void> = new EventEmitter();

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
  ) {
  }

  private listener?: () => void;

  public documentClick(event: Event) {
    if (
      this?.element &&
      !this.element.nativeElement.parentElement.contains(event.target)
    ) {
      this.outsideClick.emit();
    }
  }

  ngOnInit(): void {
    this.listener = this.renderer.listen(
      'document',
      'click',
      this.documentClick,
    );
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener;
    }
  }
}
