import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  template: `
    <section class="animated-section">
      <h2>Contact Me</h2>
      <p>Email: annmary.john@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/annmaryjohn" target="_blank">annmaryjohn</a></p>
      <p>GitHub: <a href="https://github.com/annmaryjohn" target="_blank">annmaryjohn</a></p>
    </section>
  `,
  styles: [`
    .animated-section {
      animation: fadeIn 1s ease-in;
      padding: 2rem;
    }
    a {
      color: #00d1b2;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class ContactComponent { }
