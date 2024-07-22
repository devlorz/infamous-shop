import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { ImgProductComponent } from '../img-product/img-product.component';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [ButtonModule, SkeletonModule, CurrencyPipe, ImgProductComponent],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css',
})
export class CardGridComponent {
  private readonly _router = inject(Router);
  data = input.required<any>();
  loading = input.required<boolean>();
  loadingImg = input<'eager' | 'lazy'>('eager');
  imgHover: boolean = false;

  navigateToProduct(url: string): void {
    this._router.navigateByUrl(`/producto/${url}`);
  }
}
