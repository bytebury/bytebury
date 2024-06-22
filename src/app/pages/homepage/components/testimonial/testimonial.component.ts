import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent {
  reviewerName = input.required<string>();
  applicationName = input.required<string>();
}
