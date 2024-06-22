import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CallToActionButtonComponent } from '../../components/call-to-action-button/call-to-action-button.component';
import { HeroHeaderComponent } from '../../components/hero-header/hero-header.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CallToActionButtonComponent,
    TestimonialComponent,
    HeroHeaderComponent,
  ],
})
export class HomepageComponent {}
