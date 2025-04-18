import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ import CommonModule

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule], // ✅ add to imports
  template: `
    <section class="animated-section">
      <h2>Projects</h2>
      <div class="project-card" *ngFor="let project of projects">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <small><strong>Technologies:</strong> {{ project.technologies }}</small>
      </div>
    </section>
  `,
  styles: [`
    .animated-section {
      animation: fadeIn 1s ease-out;
      padding: 2rem;
    }
    .project-card {
      background: #1f1f1f;
      padding: 1rem;
      border-radius: 10px;
      margin-bottom: 1rem;
      border-left: 4px solid #00d1b2;
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Endpoint Management System',
      description: 'Built for Explicate Inc. to manage enterprise devices securely and efficiently.',
      technologies: '.NET, Angular, SQL'
    },
    {
      name: 'Environmental Impact Visualizer',
      description: 'A data visualization tool for mapping pollution levels and environmental metrics.',
      technologies: 'Python, JavaScript, D3.js'
    }
  ];
}
