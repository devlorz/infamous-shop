import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { map } from 'rxjs';

import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';

import { HomeBanners, HomeProducts } from '../../interfaces/home.interface';
import { HomeService } from '../../services/home.service';
import { CardGridComponent } from '../../../../shared/components/card-grid/card-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, SkeletonModule, CardGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  bannersSig = signal<HomeBanners[] | any[]>([]);
  productsSig = signal<HomeProducts[] | any[]>([]);
  showNavigators = signal<boolean>(true);
  loadingBanners = signal<boolean>(false);
  loadingProducts = signal<boolean>(false);
  bannerError = signal<unknown>(undefined);
  productsError = signal<unknown>(undefined);
  service = inject(HomeService);

  readonly responsiveOptions: Array<CarouselResponsiveOptions> = [
    {
      breakpoint: '2560px',
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '425px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '368px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor() {
    this.updateResponsive();
  }

  ngOnInit(): void {
    this.service
      .getBanners()
      .pipe(
        map((banners) => {
          this.bannersSig.set(banners);
        })
      )
      .subscribe();

    this.service
      .getProducts()
      .pipe(
        map((products) => {
          this.productsSig.set(products);
        })
      )
      .subscribe();
  }

  @HostListener('window:resize', ['$event'])
  private updateResponsive() {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      this.showNavigators.set(true);
    } else {
      this.showNavigators.set(false);
    }
  }
}
