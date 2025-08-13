import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[auiOutsideClick]' })
export class OutsideClickDirective implements OnInit, OnDestroy {
  private renderer = inject(Renderer2);
  private element: ElementRef<HTMLElement> =
    inject<ElementRef<HTMLElement>>(ElementRef);

  @Input({ required: true })
  public auiOutsideClick!: boolean;

  @Output()
  public outsideClick: EventEmitter<void> = new EventEmitter<void>();

  private listener?: () => void;

  ngOnInit(): void {
    this.listener = this.renderer.listen(
      'document',
      'click',
      this.documentClick.bind(this),
    );
  }

  public documentClick(event: Event): void {
    const parent = this.element.nativeElement.parentElement;
    const target = event.target as Node;

    if (parent && parent.contains(target)) {
      this.outsideClick.emit();
    }
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener;
    }
  }
}
