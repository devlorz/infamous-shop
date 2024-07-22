import { Component, inject, input } from '@angular/core';
import { ImagePathPipe } from '../../pipes/image-path.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-img-product',
  standalone: true,
  imports: [ImagePathPipe],
  templateUrl: './img-product.component.html',
  styleUrl: './img-product.component.css',
})
export class ImgProductComponent {
  private readonly _router = inject(Router);

  data = input.required<any>();
  padding = input.required<number>();
  loading = input.required<'lazy' | 'eager'>();

  imgHover: boolean = false;

  navigateToProduct(url: string): void {
    this._router.navigate(['producto/', url]);
  }
}
