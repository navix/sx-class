import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SxClassDirective } from './sx-class.directive';
import { SxClass } from './sx-class';

describe('KitClassDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: SxClassDirective;
  let serviceMock: ServiceMock;
  // setup
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [TestComponent, SxClassDirective],
        providers: [
          ServiceMock,
        ],
      })
      .overrideDirective(SxClassDirective, {
        set: {
          providers: [
            {
              provide: SxClass,
              useExisting: ServiceMock,
            },
          ],
        },
      });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.componentInstance.directive;
    serviceMock = TestBed.get(ServiceMock);
    fixture.detectChanges();
  });
  // specs
  it('should be created', () => {
    expect(directive).toBeTruthy();
  });
  it('should pass value to service', () => {
    const className = 'class';
    const spy = spyOn(serviceMock, 'apply');
    fixture.componentInstance.className = className;
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(className);
  });
});

class ServiceMock {
  apply() {
  }
}

@Component({
  selector: 'test-component',
  template: `
    <div [kitClass]="className"></div>
  `,
})
class TestComponent {
  @ViewChild(SxClassDirective, /* TODO: add static flag */ {}) directive: SxClassDirective;

  className: string;
}
