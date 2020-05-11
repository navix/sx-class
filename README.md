# Advanced Angular Class Binding

Apply classes to an element.

### Why

1. Default Angular bindings (`[class.x]` and `[ngClass]`) do not allow to bind dynamic class-names based on `boolean`/`string` values.

2. `@HostBinding` can not provide `ngClass` functionality, if we want to bind classes from component.


## Installation

```
$ ng add @novyk/sx-class
```


## Usage

### Directive `[sxClass]`

```html
<div [sxClass]="{color: 'red', active: true, primary: false}">
<!--<div class="color-red active">-->
```

### Service `SxClass`

```typescript
constructor(private sxClass: SxClass) {}
...
this.sxClass.apply({color: 'red', active: true, primary: false});
```

Adds to element: `class="color-red active"`
