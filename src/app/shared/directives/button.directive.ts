import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[primary-button]'
})
export class PrimaryButtonDirective {
  constructor(el: ElementRef) { 
    el.nativeElement.classList += ' primary-button';
    
  }
}

@Directive({
  selector: '[secondary-button]'
})
export class SecondaryButtonDirective {
  constructor(el: ElementRef) { 
    el.nativeElement.classList += ' secondary-button';
    
  }
}
