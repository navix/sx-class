import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SxClassModule } from '../../../sx-class/src/lib/sx-class.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SxClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
