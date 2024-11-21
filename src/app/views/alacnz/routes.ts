import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Social-Work',
    },
    children: [
      {
        path: '',
        redirectTo: 'alerts',
        pathMatch: 'full',
      },
      {
        path: 'alerts',
        loadComponent: () =>
          import('./alerts/alerts.component').then((m) => m.AlertsComponent),
        data: {
          title: 'Alerts',
        },
      },
      {
        path: 'beneficiaries',
        loadComponent: () =>
          import('./beneficiaries/beneficiaries.component').then(
            (m) => m.BeneficiariesComponent
          ),
        data: {
          title: 'Beneficiaries',
        },
      },
    ],
  },
];
