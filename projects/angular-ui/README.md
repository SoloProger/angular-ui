# Angular UI

A reusable Angular UI library providing components, directives, and services to accelerate your Angular application development.

## Features
- Modular Angular components
- Reusable directives
- Fully typed services
- Compatible with Angular 16+

## Installation

Install via npm:

```bash
npm install @solo_proger/angular-ui
```

## Usage

Import component or module in your Angular application:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from '@solo_proger/angular-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Use the components in your templates:

```html
<app-button>Click Me</app-button>
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
MIT License
