import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LandingComponent {
  socialLinks = [
    { icon: 'github', url: '#' },
    { icon: 'codepen', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'linkedin', url: '#' }
  ];
}
