import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'personal',
    title: 'Personal Information',
    loadComponent: () =>
      import('./app/personal/personal.component').then(
        (c) => c.PersonalComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'personal',
  },
];
