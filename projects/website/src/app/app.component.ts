import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  code = {
    demo1: `<p style="height: 500px;">Some intro content.</p>
<img #el
     alt="lazy image"
     data-lazy-src="/assets/image.png"
     ngxIntersection
     (appear)="el.attr.src=el.data.lazy-src">`,
  };

  title = 'website';

  targetIntersected = false;

  targetIntersected2 = false;

  targetIntersected3 = false;

  alert(msg: any) {
    console.log('alrt', msg);
  }

  isVisible(d: any) {
    console.log('APPEARED!', d);
  }
}
