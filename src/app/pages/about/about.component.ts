import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <section class="animated-section">
      <h2>About Me</h2>
      <p>
        I'm Ann Mary John, a passionate Software Engineer with 3+ years of experience in full-stack development.
        I hold a Master's degree in Environmental Engineering and thrive on building scalable web apps using
        .NET, Angular, and SQL.
      </p>
    </section>
  `,
  styles: [`
    .animated-section {
      animation: fadeIn 1s ease-in;
      padding: 2rem;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AboutComponent { }
