import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio | Hard Store',
    loadComponent: () => import('./features/home/pages/home/home.component'),
  },
];
