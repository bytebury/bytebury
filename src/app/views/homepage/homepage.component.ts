import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../components/banner/banner.component';
import { Category } from '../../models/category.enum';

@Component({
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [CommonModule, BannerComponent],
})
export class HomepageComponent {
  readonly BannerCategory = Category;
}
