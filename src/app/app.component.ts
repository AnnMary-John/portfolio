// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    nav {
      display: flex;
      gap: 1rem;
      background: #111;
      padding: 1rem;
    }
    a {
      color: #eee;
      text-decoration: none;
    }
    main {
      
      color: #fff;
      background: white;
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
