import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-call-to-action-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: ` <a [href]="goTo()"><ng-content /></a> `,
  styleUrl: './call-to-action-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionButtonComponent {
  goTo = input.required<string | string[]>();
}
