import { NgModule } from '@angular/core';
import { SxClassDirective } from './sx-class.directive';

@NgModule({
  declarations: [
    SxClassDirective,
  ],
  exports: [
    SxClassDirective,
  ],
})
export class SxClassModule {
}
