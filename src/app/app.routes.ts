import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'clock-calendar',
    pathMatch: 'full',
  },
  {
    path: 'clock-calendar',
    loadComponent: () =>
      import('./clock-calendar/clock-calendar.page').then(
        (m) => m.ClockCalendarPage
      ),
  },
];
