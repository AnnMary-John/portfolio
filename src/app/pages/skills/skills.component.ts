import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-skills',
  template: `
    <section class="animated-section">
      <h2>Skills</h2>
      <ul>
        <li>.NET & C#</li>
        <li>Angular & TypeScript</li>
        <li>SQL & Database Management</li>
        <li>REST APIs & Web Services</li>
        <li>Application Performance Optimization</li>
      </ul>
    </section>
  `,
  styles: [`
    .animated-section {
      animation: slideUp 0.8s ease-in;
      padding: 2rem;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      background: #222;
      margin: 0.5rem 0;
      padding: 0.5rem;
      border-radius: 6px;
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class SkillsComponent { }
