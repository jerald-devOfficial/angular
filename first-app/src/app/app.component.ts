import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main class="p-4">
      <app-home />
    </main>
  `,
})
export class AppComponent {
  title = 'first-app';
}
