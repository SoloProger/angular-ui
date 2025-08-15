import 'zone.js';
import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from '../../lib/accordion/accordion.component';
import { By } from '@angular/platform-browser';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent], // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    fixture.componentRef.setInput('title', 'Test Accordion');
    fixture.detectChanges();

    const titleEl = fixture.debugElement.query(
      By.css('h3, [data-testid="title"]'),
    );
    expect(titleEl.nativeElement.textContent).toContain('Test Accordion');
  });

  it('should have default isToggle false', () => {
    expect(component.isOpen()).toBeFalse();
  });

  it('should toggle isToggle when toggle() is called', () => {
    expect(component.openCloseToggle()).toBeFalse();
    component.toggle();
    expect(component.openCloseToggle()).toBeTrue();
    component.toggle();
    expect(component.openCloseToggle()).toBeFalse();
  });
});
