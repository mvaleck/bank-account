import { Component, signal } from '@angular/core';
import { Welcome } from './components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  imports: [Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-angular');
}
