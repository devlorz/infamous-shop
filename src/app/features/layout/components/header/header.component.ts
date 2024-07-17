import { Component, signal } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, BadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isAuthenticated = signal<boolean>(false);
  isNavbarOpen = signal<boolean>(false);
  badgeCount = signal<number>(0);

  readonly headerConfig = {
    navbar: [
      { id: 0, label: 'Home', url: '/' },
      { id: 1, label: 'Store', url: '/store/page/1' },
      { id: 2, label: 'Custom PC', url: '/custom-pc' },
    ],
    buttons: [
      {
        id: 0,
        label: 'cart',
        icon: 'pi pi-shopping-cart',
        url: '/cart',
        badge: true,
      },
      {
        id: 1,
        label: 'favorite',
        icon: 'pi pi-heart',
        url: '/favorite',
        authRequired: true,
      },
      {
        id: 2,
        label: 'account',
        icon: 'pi pi-user',
        url: '',
      },
    ],
  };
}
