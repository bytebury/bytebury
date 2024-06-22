import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  private static readonly PIXELS_BEFORE_HIDING = 120;

  private lastScrollTop = signal(0);

  navBarVisible = signal(true);
  navBarTopPx = computed(() => (this.navBarVisible() ? '0px' : '-100%'));

  @HostListener('window:scroll')
  handleScroll(): void {
    this.toggleNavBar();
  }

  private toggleNavBar(): void {
    const scrollTop = window.scrollX || document.documentElement.scrollTop;

    if (
      scrollTop > this.lastScrollTop() &&
      scrollTop > NavBarComponent.PIXELS_BEFORE_HIDING
    ) {
      this.navBarVisible.set(false);
    } else {
      this.navBarVisible.set(true);
    }

    this.lastScrollTop.set(scrollTop);
  }
}
