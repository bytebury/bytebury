import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { CallToActionButtonComponent } from '../call-to-action-button/call-to-action-button.component';

@Component({
  selector: 'app-hero-header',
  standalone: true,
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CallToActionButtonComponent],
})
export class HeroHeaderComponent {
  imageUrl = input(
    'https://images.ctfassets.net/kftzwdyauwt9/4HGPvb9dhHOzl8BVIah0ZG/af1d09bade2e153599c6c7d7c04bc33c/apple-art-2a-2x1.jpg?w=1920&q=90&fm=webp',
  );
  backgroundUrl = computed(() => `url(${this.imageUrl()})`);
}
