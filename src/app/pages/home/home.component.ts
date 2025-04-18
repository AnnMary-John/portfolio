// src/app/pages/home.component.ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <section>
      <h1>Hello, I'm Ann Mary John</h1>
      <p>Software Engineer | Full Stack Developer | Environmental Engineer</p>
    </section>
  `,
  styles: [`
    section {
      padding: 2rem;
      text-align: center;
      color: #fff;
      background: #121212;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
      color: #bbb;
    }
  `]
})
export class HomeComponent { }
