import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonModule, DividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footer = [
    {
      buttons: [
        {
          label: 'Shopping',
          action: () => {},
        },
        {
          label: 'Dealer',
          action: () => {},
        },
        {
          label: 'Support',
          action: () => {},
        },
        {
          label: 'Contact US',
          severity: '',
          action: () => {},
        },
      ],
      social: [
        {
          label: 'X',
          icon: 'pi pi-twitter',
          action: () => {},
        },
        {
          label: 'YouTube',
          icon: 'pi pi-youtube',
          action: () => {},
        },
        {
          label: 'Facebook',
          icon: 'pi pi-facebook',
          action: () => {},
        },
        {
          label: 'Linkedin',
          icon: 'pi pi-linkedin',
          action: () => {},
        },
        {
          label: 'Instagram',
          icon: 'pi pi-instagram',
          action: () => {},
        },
        {
          label: 'Twitch',
          icon: 'pi pi-twitch',
          action: () => {},
        },
      ],
    },
  ];
}
