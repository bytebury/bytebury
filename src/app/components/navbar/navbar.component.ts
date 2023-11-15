import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ModalComponent],
})
export class NavbarComponent {
  @ViewChild('mobileNavigation') mobileNavigation!: ModalComponent;

  openMobileNavigation(): void {
    this.mobileNavigation.open();
  }
}
