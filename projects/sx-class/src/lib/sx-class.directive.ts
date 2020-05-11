import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SxClass } from './sx-class';
import { SxClassSetter } from './meta';

/**
 * Provides `SxClass` and pass input value to `SxClass.apply` method.
 *
 *
 * ### Usage
 *
 * ```html
 * <div [sxClass]="{color: 'red', active: true, primary: false}">
 * <!--<div class="color-red active">-->
 * ```
 */
@Directive({
  selector: '[sxClass]',
  providers: [SxClass],
})
export class SxClassDirective implements OnChanges {
  @Input() sxClass!: SxClassSetter;

  constructor(private service: SxClass) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['evoClass']) {
      this.service.apply(this.sxClass);
    }
  }
}
